import { defaultTheme } from 'vuepress';

export default {
  title: 'Nest.js 入门及实践',
  description: 'Introduction and Practice of Nest.js',
  head: [['link', { rel: 'icon', href: '/hello-nest-doc/images/logo.png' }]],
  base: '/', // 1.Pages: /hello-nest-doc/ 2.Vercel: /
  theme: defaultTheme({
    home: '/',
    logo: '/images/logo.png',
    repo: 'https://github.com/yingjieweb/hello-nest-doc',
    navbar: [
      {
        text: 'Author',
        link: 'https://github.com/yingjieweb',
      },
    ],
    sidebar: [
      { text: '前言', link: '/' },
      { text: '目录', link: '/catalogue/' },
      { text: 'Why Nest.js', link: '/why/' },
      {
        text: 'Nest.js 简介',
        link: '/concept/',
        collapsible: true,
        children: [{ text: '可扩展表现', link: '/concept/expandable/' }],
      },
      {
        text: 'Hello World!',
        collapsible: true,
        children: [
          { text: '脚手架安装 & 项目初始化', link: '/practice/init/' },
          { text: '目录结构 & 文件介绍', link: '/practice/intro/' },
          { text: '相关装饰器介绍', link: '/practice/decorators/' },
          { text: 'CRUD 接口实现', link: '/practice/crud/' },
          { text: '参数校验', link: '/practice/paramsDto/' },
          { text: '设置状态码', link: '/practice/statusCode/' },
          { text: '统一响应体结构', link: '/practice/unifyResponse/' },
        ],
      },
      {
        text: '配置 Swagger',
        collapsible: true,
        children: [
          { text: '安装 & 配置', link: '/swagger/install/' },
          { text: '装饰器介绍', link: '/swagger/decorators/' },
          { text: '配置示例', link: '/swagger/examples/' },
        ],
      },
      { text: '数据库集成', link: '/database/' },
    ],
  }),
};
