# 安装 & 配置

要为 Nest.js 应用程序配置 Swagger API 文档，可以使用@nestjs/swagger 模块，它是 Nest.js 官方提供的 Swagger 集成工具。下面是如何配置 Swagger API 文档的一般步骤：

- 安装依赖

首先，确保你的 Nest.js 应用已经安装了@nestjs/swagger 和 swagger-ui-express 这两个依赖项。你可以使用 npm 或 yarn 安装它们：

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

- 配置 Swagger：

在应用程序的根模块（main.ts）中配置 Swagger

```javascript
// src/main.ts
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局使用管道，用于 Controller 层参数校验
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle("接口文档")
    .setDescription("Hello-nest 接口文档")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3000);
}
bootstrap();
```
