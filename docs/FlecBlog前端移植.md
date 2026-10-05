# FlecBlog 前端样式移植

参考来源：C:/Users/123/Desktop/blog2/FlecBlog/blog（FlecBlog，MIT 许可证，副本见 public/flec/LICENSE）。

Firefly 继续使用 Astro 与原有 Markdown/MDX 内容，不依赖 FlecBlog 的数据库或 API。主题配置在 src/config/flecTheme.json 中保存为本地快照。背景和霞鹜文楷字体来自参考项目。

公共页面布局在 src/layouts/MainGridLayout.astro、FlecDocument.astro 和 src/components/layout/FlecShell.astro。列表与侧栏分别在 FlecPostCard.astro 和 FlecSidebar.astro，主要样式在 src/styles/flec-theme.css。

音乐继续使用原有 MusicManager、MusicPlayer、MusicPlayerView 和 src/config/musicConfig.ts。播放器位于侧栏，Swup 切页保留同一音频实例。顶部导航保留搜索和明暗切换，中间导航增加项目入口。

预览：pnpm dev。检查：pnpm check、pnpm type-check、pnpm build。

## 线上发布

正式域名为 https://blog.sgpli.com，对应 Cloudflare Workers 项目 `firefly`。此版本在原项目上发布，替换旧版 Firefly 界面；文章和音乐继续在本仓库维护。

修改后执行 `pnpm check`、`pnpm type-check`、`pnpm build`，再执行 `wrangler deploy` 上传 `dist`。GitHub 仓库 `351507901/Firefly` 的 `master` 分支用于保存源码。仓库中的 GitHub Pages 工作流属于另一个发布渠道，Cloudflare 正式站使用 Wrangler 发布。

日历复用 Firefly 的 Calendar 组件，位于侧栏网站信息上方。网站信息显示文章总字数和基于 `siteConfig.siteStartDate` 的运行天数。
