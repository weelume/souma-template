import test from 'node:test'
import {createRequire} from 'node:module'
import assert from 'node:assert/strict'
import {readFile,readdir} from 'node:fs/promises'
import {createHash} from 'node:crypto'
const root=new URL('../',import.meta.url)
const read=path=>readFile(new URL(path,root))
test('参考素材来源与真实文件摘要一致',async()=>{const sources=JSON.parse(await read('.tpl/docs/asset-sources.json'));for(const item of sources.images){assert.equal(createHash('sha256').update(await read(item.file)).digest('hex'),item.sha256);assert.match(item.url,/^https:\/\/framerusercontent.com\//)}})
test('交付展示截图覆盖三端且真实编码尺寸正确',async()=>{const meta=JSON.parse(await read('.tpl/template.json'));for(const device of ['desktop','tablet','mobile']){const items=meta.screenshots.filter(s=>s.device===device);assert.equal(items.length,4);for(const item of items){const bytes=await read('.tpl/'+item.src);assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WEBP');const require=createRequire(import.meta.url);const sharp=createRequire(require.resolve('next/package.json'))('sharp');const image=await sharp(bytes).metadata();assert.equal(image.width,item.width);assert.equal(image.height,item.height)}}})
test('通用业务源码不包含宿主品牌或主站路径',async()=>{async function files(dir){for(const entry of await readdir(new URL(dir,root),{withFileTypes:true})){const path=dir+'/'+entry.name;if(entry.isDirectory())await files(path);else if(/\.(ts|tsx|css)$/.test(path)){const text=(await read(path)).toString();assert.doesNotMatch(text.replace('https://github.com/weelume/souma-template',''),/weelume|微域生光|D:\/code/i,path)}}}await files('src')})
