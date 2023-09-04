module.exports = {
  title: "Nest.js 入门及实践",
  description: "A documentation website for Hello Nest.",
  base: "/hello-nest-doc/",
  themeConfig: {
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/yingjieweb/hello-nest",
      },
    ],
    sidebar: [
      {
        title: "Nest.js 介绍",
        children: [
          {
            title: "可扩展？",
            path: "/concept/expandable/",
          },
          {
            title: "Express？",
            path: "/concept/express/",
          },
          {
            title: "哪些优势？",
            path: "/concept/advantage/",
          },
        ],
      },
      {
        title: "Hello World!",
        children: [
          {
            title: "脚手架安装 & 项目初始化",
            path: "/practice/init/",
          },
          {
            title: "目录结构 & 文件介绍",
            path: "/practice/intro/",
          },
          {
            title: "相关装饰器介绍",
            path: "/practice/decorators/",
          },
          {
            title: "CRUD 接口实现",
            children: [
              {
                title: "准备 user 模块",
                path: "/practice/crud/module/",
              },
              {
                title: "user.controller.ts",
                path: "/practice/crud/controller/",
              },
              {
                title: "user.service.ts",
                path: "/practice/crud/service/",
              },
            ],
          },
          {
            title: "参数校验",
            children: [
              {
                title: "Body、Query 参数校验",
                path: "/practice/paramsDto/body&query/",
              },
              {
                title: "Params 参数校验",
                path: "/practice/paramsDto/params/",
              },
            ],
          },
          {
            title: "设置状态码",
            children: [
              {
                title: "通过 @HttpCode() 装饰器设置",
                path: "/practice/statusCode/httpCode/",
              },
              {
                title: "通过 @Res() 参数装饰器设置",
                path: "/practice/statusCode/res/",
              },
              {
                title: "二者的区别",
                path: "/practice/statusCode/diff/",
              },
            ],
          },
          {
            title: "统一响应体结构",
            children: [
              {
                title: "封装统一响应工具函数",
                path: "/practice/response/utils/",
              },
              {
                title: "封装统一响应过滤器",
                path: "/practice/response/filters/",
              },
            ],
          },
        ],
      },
      {
        title: "配置 Swagger",
        children: [
          {
            title: "安装 & 配置",
            path: "/swagger/install/",
          },
          {
            title: "装饰器介绍",
            path: "/swagger/decorators/",
          },
          {
            title: "配置示例",
            path: "/swagger/examples/",
          },
        ],
      },
      {
        title: "数据库集成",
        path: "/database/",
      },
    ],
  },
};
