# 基于 Express

> 在底层，Nest 构建在强大的 <u>HTTP 服务器框架上</u>，例如 [Express](https://expressjs.com/) （默认），并且还可以通过配置从而使用 [Fastify](https://github.com/fastify/fastify)！

Nest.js 官网在介绍它的时候提到，其是构建在 Express 之上的，那我们不妨就先来聊一聊 Express 框架。

[Express.js](https://expressjs.com/) 是一个基于 Node.js 的 Web 应用程序框架，可以被视为对 Node.js 的封装。Express.js 提供了简化和抽象化的 API，使得在 Node.js 上构建 Web 应用程序变得更加<u>简单和高效</u>。

Node.js 本身提供了处理网络请求和构建 Web 服务器的能力，但它的 API 相对底层，需要开发者手动处理很多细节。<u>而 Express.js 通过封装 Node.js 的功能，提供了更高层次的抽象和开发工具，使得构建 Web 应用程序变得更加便捷</u>。

我们通过一个接口实现来对比 Express 与 Node.js 的使用：

**通过 Node.js 实现**

```javascript
import * as http from 'http';
const app = http.createServer();

app.on('request', (request, response) => {
  const { method, url } = request;
  if (method === 'GET' && url === '/hello') {
    response.end('hello world');
  }
});
app.listen(3000);
```

**通过 Express 实现相同功能**

```javascript
const express = require('express');
const app = express();

app.get('/hello', (request, response) => {
  response.send('hello world');
});
app.listen(3000);
```

其实严格来说 Express.js 并不是一个框架，它只是提供了基于中间件的请求响应处理流程。<u>Express.js 并没有规定代码应该怎么组织，怎么复用，怎么集成各种方案，所以代码能写成各种样子，对于大项目开发来说很难维护</u>。所以出现了更上层的 Node 框架，比如 Egg、Midway、Nest 这些，它们额外提供了架构能力，这类框架也叫企业级开发框架。

Nest.js 基于 Express.js 提供了更高层次的抽象和功能扩展。它引入了一些新的概念，<u>如模块、控制器和中间件</u>，以帮助开发者更好地组织和管理代码。Nest.js 还提供了一套强大的<u>依赖注入系统</u>，可以帮助解耦组件之间的依赖关系，并方便进行单元测试。
