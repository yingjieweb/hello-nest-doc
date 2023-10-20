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
          {
            title: "参数校验",
            children: [
              ["/practice/paramsDto/body&query/", "Body、Query 参数校验"],
              ["/practice/paramsDto/params/", "Params 参数校验"],
            ],
          },
          {
            title: "设置状态码",
            children: [
              ["/practice/statusCode/httpCode/", "通过 @HttpCode() 装饰器设置"],
              ["/practice/statusCode/res/", "通过 @Res() 参数装饰器设置"],
              ["/practice/statusCode/diff/", "二者的区别"],
            ],
          },
          {
            title: "统一响应体结构",
            children: [
              ["/practice/response/utils/", "封装统一响应工具函数"],
              ["/practice/response/filters/", "封装统一响应过滤器"],
            ],
          },
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
