# 可扩展表现

> [Nest (NestJS)](https://nestjs.bootcss.com/) 是一个用于构建高效、<u>可扩展的</u> [Node.js](https://nodejs.org/en) 服务器端应用程序的开发框架。

怎么扩展？类似于前端组件化？🤔️

Nest.js 的可扩展性表现在多个方面，比如：模块化架构、依赖注入、中间件和拦截器、微服务支持等。有点懵？没关系，我们一个个来分析 🧐

## 模块化架构

如果把 Nest.js 比作火箭，那么模块就是火箭的各个部分，比如：发动机、推进器、回收舱等。这样，你可以像搭积木一样，单独修改或添加模块，而不会影响整个火箭的飞行。

```javascript
src
├── ...
├── app.module.ts
├── modules
├────── rocket/
├────── engine/
├────── // ... 其他模块
```

上面就是 Nest.js 模块化架构的简单示例，将整个应用程序分成多个模块，每个模块都专注于特定的任务。如果你还想让火箭支持载人功能，那只需要添加一个新的房间模块，比如：`capsule`

## 依赖注入

类似于火箭需要不同的燃料和润滑剂，Nest.js 使用依赖注入来管理组件之间的关系。这使得你能够像给火箭引擎添加燃料一样，轻松地管理组件之间的依赖。

听起来是不是有点抽象？🤔️

<u>实际上，依赖注入的核心理念是解耦组件的依赖关系</u>。这意味着它从组件内部获取依赖项，而不是在组件内部直接创建或实例化它们。通过这种方式，组件无需担心依赖项的创建和生命周期管理，而是通过依赖注入容器自动解析并提供所需的依赖项。

```javascript
@Injectable()
class RrocketService {
  private engine;

  constructor(engine) {
    this.engine = engine;
  }
  // 使用 this.engine 进行操作
}
```

上面就是依赖注入的一个简单示例，通过 `@Injectable()` 装饰器，Nest.js 会将 `Engine` 注入到 `RrocketService` 中。开发者无需直接实例化 `Engine`，而是通过依赖注入容器来提供。

如果还是不明白依赖注入为什么可以增强 Nest.js 的可扩展性的话，我们再举个例子 🌰

**星际飞船的维护**： 假设你是星际飞船的首席设计师，星际飞船有多个系统，比如引擎、能源控制、生命支持等。每个系统都是一个组件，而星际飞船就是一个巨大的模块。

**传统开发方式**：在没有依赖注入的情况下，你可能会在每个系统内部创建或实例化它所依赖的其他系统。比如，在引擎系统内部，你需要直接实例化能源控制系统：

```javascript
class Engine {
  constructor() {
    this.energyControl = new EnergyControl(); // 直接创建依赖项
  }
}
```

这样的问题在于，如果你想添加一个新的系统，比如防御系统，你就需要修改引擎的代码并在其中加入防御系统的实例化。这样一来，系统之间的关系就会变得紧密，代码也变得难以维护和扩展。

**使用依赖注入**：现在，假设你使用依赖注入。每个系统不再负责自己依赖项的实例化，而是通过依赖注入容器来提供。

```javascript
@Injectable()
class Engine {
  this.energyControl;

  constructor(energyControl) {
    this.energyControl = energyControl; // 通过依赖注入容器提供依赖项
  }
}
```

如果你想添加防御系统，只需在依赖注入容器中注册防御系统，而无需修改引擎的代码。这使得系统之间的耦合度降低，每个系统变得更加独立，更容易被替换或添加。

## 中间件和拦截器

Nest.js 提供了中间件和拦截器的机制，使得在请求的处理过程中可以插入自定义的逻辑。中间件和拦截器可以用于实现诸如权限验证、日志记录、缓存等功能。通过这些机制，你可以在应用程序的不同层面上进行扩展，而不必改变核心的业务逻辑。

```javascript
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req, res, next) {
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

上述例子展示了一个中间件的实现，它会在请求处理过程中验证请求头中的授权信息。若请求头中缺少授权信息，将返回未经授权的响应；反之，若身份验证通过，则继续请求处理。这与前端的路由守卫类似，让你能够在不同层面上灵活地扩展应用程序的功能。

看图更好理解一点 ⬇️

![](/images/middleware.png)

## 微服务集成

Nest.js 在构建可扩展应用程序时提供了强大的微服务集成能力。通过微服务，你可以将应用程序拆分成独立的服务，使得它们可以独立开发、部署和维护。这种模块化的架构为应对不断变化的需求提供了灵活性。

当使用 Nest.js 构建微服务时，一个简单的例子是通过 HTTP 进行通信。以下是一个简化的例子：

1. **创建一个微服务模块：**

```typescript
// cats.module.ts

import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
})
export class CatsModule {}
```

2. **创建一个微服务控制器：**

```typescript
// cats.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  getCats(): string {
    return 'Meow!';
  }
}
```

3. **在主应用程序中引入微服务模块：**

```typescript
// app.module.ts

import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
```

4. **启动微服务：**

```typescript
// main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

在这个示例中，我们创建了一个简单的 `CatsController`，它有一个基本的 `getCats` 方法返回 "Meow!"。我们通过 HTTP 提供此微服务。

启动应用程序后，你可以通过浏览器或任何 HTTP 客户端向 `http://localhost:3000/cats` 发送请求，它将返回 "Meow!"。

这是一个简单的微服务示例，实际应用中可能会使用更复杂的通信模式和工具，具体取决于你的应用需求。
