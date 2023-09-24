> [Nest (NestJS)](https://nestjs.bootcss.com/) 是一个用于构建高效、<u>可扩展的</u> [Node.js](https://nodejs.org/en) 服务器端应用程序的开发框架。它利用 JavaScript 的<u>渐进增强</u>的能力，使用并完全支持 [TypeScript](https://www.typescriptlang.org/) （仍然允许开发者使用纯 JavaScript 进行开发），并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数响应式编程）。

> 在底层，Nest 构建在强大的 <u>HTTP 服务器框架上</u>，例如 [Express](https://expressjs.com/) （默认），并且还可以通过配置从而使用 [Fastify](https://github.com/fastify/fastify)！

## 可扩展表现？

- 模块化架构：应用拆分成更小的模块，各部分可独立地进行扩展和修改，不会对整个系统造成大的影响

```javascript
// 模块化架构 → 类比前端组件化、页面
 
src
├── ...
├── app.module.ts
├── modules
├────── car/
├────── engine/
```

- 依赖注入：内置依赖注入容器，用于管理组件之间的依赖关系，将组件的依赖关系解耦。依赖注入的核心概念是将组件的依赖项从组件内部获取，而不是在组件内部直接创建或实例化依赖项。通过这种方式，组件不需要关心依赖项的创建和生命周期管理，而是通过依赖注入容器（DI 容器）来自动解析和提供所需的依赖项。

```javascript
@Injectable()
class CarService {
  private engine: Engine;
 
  constructor(engine: Engine) {
    this.engine = engine;
  }
  // 使用 this.engine 进行操作
}
```

- 中间件和拦截器：Nest.js 提供了中间件和拦截器的机制，使得在请求的处理过程中可以插入自定义的逻辑。中间件和拦截器可以用于实现诸如权限验证、日志记录、缓存等功能。通过这些机制，你可以在应用程序的不同层面上进行扩展，而不必改变核心的业务逻辑。

```javascript
// 可以在不同层面插入自定义逻辑 → 可以类比前端的路由守卫？
 
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
 
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // 在这里编写身份验证逻辑
    if (!req.headers.authorization) {
      // 如果请求头中没有授权信息，则返回未经授权的响应
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
 
    // 如果身份验证通过，则继续请求处理
    next();
  }
}
```
![](/images/middleware.png)

- 数据库集成：Nest.js 与多种数据库集成框架（如TypeORM、Mongoose等）兼容，这使得在应用程序中使用数据库变得更加容易，并且可以方便地进行扩展和迁移。

##  基于 Express 构建？
[Express.js](https://expressjs.com/) 是一个基于 Node.js 的 Web 应用程序框架，可以被视为对 Node.js 的封装。Express.js 提供了简化和抽象化的 API，使得在 Node.js 上构建 Web 应用程序变得更加<u>简单和高效</u>。

Node.js 本身提供了处理网络请求和构建 Web 服务器的能力，但它的 API 相对底层，需要开发者手动处理很多细节。<u>而 Express.js 通过封装 Node.js 的功能，提供了更高层次的抽象和开发工具，使得构建 Web 应用程序变得更加便捷</u>。

```javascript
import * as http from "http";
const app = http.createServer();
 
app.on("request", (request, response) => {
  const { method, url } = request;
  if (method === 'GET' && url === '/hello') {
    response.end('hello world');
  }
});
app.listen(3000);
 
// Express 实现上述功能
const express = require('express');
const app = express();
 
app.get('/hello', (request, response) => {
  response.send('hello world');
});
app.listen(3000);
```

其实严格来说 Express.js 并不是一个框架，它只是提供了基于中间件的请求响应处理流程。<u>Express.js 并没有规定代码应该怎么组织，怎么复用，怎么集成各种方案，所以代码能写成各种样子，对于大项目开发来说很难维护</u>。所以出现了更上层的 Node 框架，比如 Egg、Midway、Nest 这些，它们额外提供了架构能力，这类框架也叫企业级开发框架</u>。

Nest.js 基于 Express.js 提供了更高层次的抽象和功能扩展。它引入了一些新的概念，<u>如模块、控制器和中间件</u>，以帮助开发者更好地组织和管理代码。Nest.js 还提供了一套强大的<u>依赖注入系统</u>，可以帮助解耦组件之间的依赖关系，并方便进行单元测试。

## Nest.js 优势？
- TypeScript 支持 → [题外话：一定是优势吗？](https://juejin.cn/post/7218117377052377143)

- 无缝集成：直接使用 npm 安装常用的库

- 模块化架构

- 依赖注入

- 强大的路由系统

- 内置的中间件支持

- 生态系统和插件

... 
