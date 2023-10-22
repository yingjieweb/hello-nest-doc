module.exports = {
  title: "Nest.js 入门及实践",
  description: "A documentation website for Hello Nest.",
  base: "/hello-nest-doc/", // publicPath
  themeConfig: {
    logo: "/images/logo.png",
    nav: [
      {
        text: "Author",
        link: "https://github.com/yingjieweb",
      },
      {
        text: "GitHub",
        link: "https://github.com/yingjieweb/hello-nest",
      },
    ],
    sidebar: [
      ["/", "前言"],
      ["/why/", "Why Nest.js"],
      ["/concept/", "Nest.js 介绍"],
      {
        title: "Hello World!",
        children: [
          ["/practice/init/", "脚手架安装 & 项目初始化"],
          ["/practice/intro/", "目录结构 & 文件介绍"],
          ["/practice/decorators/", "相关装饰器介绍"],
          ["/practice/crud/", "CRUD 接口实现"],
          ["/practice/paramsDto/", "参数校验"],
          ["/practice/statusCode/", "设置状态码"],
          ["/practice/unifyResponse/", "统一响应体结构"],
        ],
      },
      {
        title: "配置 Swagger",
        children: [
          ["/swagger/install/", "安装 & 配置"],
          ["/swagger/decorators/", "装饰器介绍"],
          ["/swagger/examples/", "配置示例"],
        ],
      },
      ["/database/", "数据库集成"],
    ],
  },
};
