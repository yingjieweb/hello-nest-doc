# Hello Nest Doc 📒

## 本地开发

本仓库只维护 VuePress 教程站。Nest.js 可运行示例独立维护在 [hello-nest](https://github.com/yingjieweb/hello-nest)，文中的代码块用于讲解，不是本站的后端服务。

```sh
npm ci
npm run docs:dev
```

构建静态站点：

```sh
npm run docs:build
```

文章位于 `docs/`，站点配置、样式和图片位于 `docs/.vuepress/`，构建产物输出到 `docs/.vuepress/dist/`。
推送到 `master` 后，GitHub Actions 会构建并发布到 GitHub Pages；本地 `npm run deploy` 会推送到 `gh-pages` 分支。

当前暂时固定 VuePress 为 `2.0.0-rc.0`，将后端拆分与文档工具链升级分开进行。

## 项目背景

2023 年 6 月 21 日，我在 [掘金](https://juejin.cn/user/2576910988098888/posts) 和 [CSDN](https://blog.csdn.net/Marker__?type=blog) 上发布了一篇关于学习 Nest.js 的文章：[《知道了，去卷后端 ➡️「Nest.js 入门及实践」》](https://juejin.cn/post/7247059220143177783)，截止到 2023 年 10 月 10 日，累计阅读量 3.2k+，点赞 37，评论 26，且掘金一直在给我推送文章被收藏的消息，这说明还是有挺多人对 Nest.js 感兴趣的。👀

基于上述背景，为了让大家有更好的阅读体验，也为了让更多人看到这篇文章，我决定将这篇文章迁移到 [GitHub](https://github.com/yingjieweb/hello-nest-doc)，并开源出来，希望能帮助到更多想学习 Nest.js 的小伙伴。🎉

📚 本站内容主要涵盖：Nest.js 介绍、HelloWorld 项目、CRUD 接口开发、配置 Swagger 文档、数据库集成、项目部署等，具体大纲可查看 <a href="https://yingjieweb.github.io/hello-nest-doc/catalogue/" target="blanket"> 目录 📖 </a>；此外，也会在适当的地方简要提及基础原理，但重点还是在应用和实践上，毕竟要先学会走再学会跑! → 原理? 🤷 应用！🙋。

其实我从 2023 年 9 月 4 日就开始着手做这件事情了，但因为各种原因，一直拖到了 2023 年 10 月 10 日还尚未完成。由于我也是从一名 Nest.js 萌新一点点自学过来的，所以文章不可避免的存在一些不足的地方，但我会持续更新，并修复已发现的问题。如果你发现了文章中存在错误的地方，欢迎提 [issue](https://github.com/yingjieweb/hello-nest-doc/issues) 或者 [PR](https://github.com/yingjieweb/hello-nest-doc/pulls)，我会尽快修复。😁

如果你觉得这篇文章对你有所帮助，[可以点个 Star ⭐️ 支持一下](https://github.com/yingjieweb/hello-nest-doc)，你的支持和认可就是我更新的动力 🤩。上哪能弄一个 Github Starstruck 徽章呢？🤔️
