# 架构

Next App Router 解析双语路径，meta.ts 静态注册页面。feature 内 config、content、tokens/theme、components、pages 分工；页面不引用外部宿主。host.tsx 仅提供可选注入合同。运行素材均在 public/templates/souma，截图在 .tpl/assets。无后端数据路径。
