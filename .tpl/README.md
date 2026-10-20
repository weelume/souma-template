# Souma 瑜伽与正念模板

独立 Next.js / React / TypeScript 工程，10 页、20 条中英文路由，支持 PC、iPad 和手机。首页与下载页参考 https://souma.framer.website/；日志、联系和政策页是补充设计，不是原站内页。品牌、内容、主题、组件、页面和路由分别维护。

固定环境见 .nvmrc 与 package.json。执行 `pnpm install --frozen-lockfile`，`pnpm dev` 后访问 http://127.0.0.1:43284；Ctrl+C 停止。`pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build` 验证，`pnpm bundle` 生成本地共享包。可通过 PORT 修改端口。没有数据库、后台、账号或支付服务。表单不保存、不发送，下载与订阅仅展示。依赖沿用已有模板的固定版本，不引入新第三方库。

通用品牌位于 src/features/site-templates/catalog/souma/config/brand.ts；双语内容在 content；主题变量为 tokens.css，布局为 theme.css；components 复用交互，pages 组合页面，meta.ts 注册路由。公开包导出 template 与 host，品牌及备案由可选 Provider 注入。

素材来源与限制见 docs/LICENSE.md 和 asset-sources.json。未确认参考图片授权，不公开上架。Git 仓库：https://github.com/weelume/souma-template。远端已创建为空仓库，尚未提交或上传源码；实际验收状态见验收资料。
