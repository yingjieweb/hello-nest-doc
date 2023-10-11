# 目录结构 & 文件介绍

```javascript
src
├── app.controller.spec.ts // 针对控制器的单元测试
├── app.controller.ts // 带有单个路由的基本控制器
├── app.module.ts // 应用程序的根模块（root module）
├── app.service.ts // 具有单一方法的基本服务（service）
├── app.service.spec.ts // 针对服务的单元测试
├── main.ts // 应用程序的入口文件
```

- 入口文件（main.js）：应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序的实例

```javascript
// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // curl http://localhost:3000
}
bootstrap();
```

- 模块（Modules）：Nest.js 应用程序由多个模块组成，每个模块都是一个逻辑上的独立单元。模块可以包含路由、控制器、服务和其他相关的组件。模块之间可以进行嵌套和引用，形成层次化的结构。

```javascript
// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // 导入模块的列表，如果需要使用其他模块的服务，需要通过这里导入
  controllers: [AppController], // 控制器
  providers: [AppService],      // 服务提供者，处理具体的业务逻辑
})
export class AppModule {}
```

- 控制器（Controllers）：控制器处理来自客户端的请求，并将请求分发给相应的服务进行处理。控制器负责定义路由和请求处理程序，它们使用装饰器来标记路由和请求方法。

```javascript
// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

🚩 在 Nest.js 中，使用控制器（Controller）和服务（Service）的组合是一种推荐的架构模式。控制器负责处理客户端的请求和响应，而服务则负责处理具体的业务逻辑。这种模式的好处是将请求处理和业务逻辑分离，使代码更具可读性、可维护性和可测试性。

![](/images/fileIntro.png)
