> [Nest (NestJS)](https://nestjs.bootcss.com/) 是一个用于构建高效、<u>可扩展的</u> [Node.js](https://nodejs.org/en) 服务器端应用程序的开发框架。它利用 JavaScript 的<u>渐进增强</u>的能力，使用并完全支持 [TypeScript](https://www.typescriptlang.org/) （仍然允许开发者使用纯 JavaScript 进行开发），并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数响应式编程）。

> 在底层，Nest 构建在强大的 <u>HTTP 服务器框架上</u>，例如 [Express](https://expressjs.com/) （默认），并且还可以通过配置从而使用 [Fastify](https://github.com/fastify/fastify)！

### 可扩展？

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