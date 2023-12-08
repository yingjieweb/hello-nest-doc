# Nest.js 简介

> [Nest (NestJS)](https://nestjs.bootcss.com/) 是一个用于构建高效、<u>可扩展的</u> [Node.js](https://nodejs.org/en) 服务器端应用程序的开发框架。它利用 JavaScript 的<u>渐进增强</u>的能力，使用并完全支持 [TypeScript](https://www.typescriptlang.org/) （仍然允许开发者使用纯 JavaScript 进行开发），并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数响应式编程）。

> 在底层，Nest 构建在强大的 <u>HTTP 服务器框架上</u>，例如 [Express](https://expressjs.com/) （默认），并且还可以通过配置从而使用 [Fastify](https://github.com/fastify/fastify)！

上述内容是 Nest.js 官网的介绍，简单来说，Nest.js 是一个基于 TypeScript 构建的 **Node.js 服务端开发框架**。它提供了很多开箱即用的功能，比如：依赖注入、拦截器、全局异常处理、管道、过滤器、模块化等等。

在我第一次看到上述介绍时，感觉还是比较抽象的，尤其有几个专有名词让我摸不着头脑，比如：

- <u>可扩展的</u>：怎么扩展？类似于前端组件化？🤔️

- JavaScript 的<u>渐进增强</u>的能力：JavaScript 还有这种能力？shift！我怎么不知道？🤨

- Nest 构建在强大的 <u>HTTP 服务器框架上</u>：这又是什么，类似于组件封装吗？🧐

磨刀不误砍柴工，接下来，我结合网上查到的解释和自己的理解，来对上述专有名词做一个简单的解释，知其然，知其所以然 👀， Let's go！

::: warning
该章节提供的示例代码无需记忆，只需要了解 Nest.js 提供的功能即可，后续章节会详细介绍。
:::