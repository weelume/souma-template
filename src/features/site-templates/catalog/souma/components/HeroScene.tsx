'use client'
import type { TemplateLocale } from '../../../types'
import { useSoumaHost } from '../host'
import { brand } from '../config/brand'
/** 与参考照片中的屏幕坐标对齐，界面文字由真实双语 DOM 渲染，避免将文案固化进图片。 */
export function HeroScene({ locale }: { locale: TemplateLocale }) {
  const host = useSoumaHost(), name = host.brandName?.[locale] || brand.name[locale]
  return <div className="so-hero-visual" aria-hidden="true"><div className="so-hero-scene"><img src={`${brand.assetBase}/images/hero.png`} alt="" fetchPriority="high" /><div className="so-scene-brand">{name}</div><div className="so-scene-title">{locale === 'zh' ? <>留一点空间<br />给自己</> : <>A little space<br />for you.</>}</div><div className="so-scene-class"><strong>{locale === 'zh' ? '清晨流动' : 'Morning flow'}</strong><span>{locale === 'zh' ? '15 分钟 · 舒缓' : '15 min · Gentle'}</span><b>▶</b></div><div className="so-scene-week"><span>{locale === 'zh' ? '本周的练习' : 'This week'}</span><div>{(locale === 'zh' ? ['一', '二', '三', '四', '五', '六', '日'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']).map((day, i) => <span key={day}>{day}<b>{i < 4 ? '●' : '◯'}</b></span>)}</div></div><div className="so-scene-bottom">{(locale === 'zh' ? ['首页', '探索', '练习', '我的'] : ['Home', 'Explore', 'Practice', 'You']).map((label, i) => <span key={label}><b>{['⌂', '◇', '♧', '♙'][i]}</b>{label}</span>)}</div></div></div>
}
