# 相关装饰器介绍

> Nest 是基于装饰器这种语言特性而创建的。在很多常见的编程语言中，装饰器是一个广为人知的概念，但在 JavaScript 世界中，这个概念仍然相对较新。所以为了更好地理解装饰器是如何工作的，建议看看这篇文章 [Exploring EcmaScript Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)。下面给出一个简单的定义：

> ES2016 装饰器是一个表达式，它返回一个可以将目标、名称和属性描述符作为参数的函数。通过在装饰器前面添加一个 @ 字符并将其放置在你要装饰的内容的最顶部来应用它。可以为类、方法或属性定义装饰器。

上述内容是 Nest 官网对装饰器的定义。简而言之，装饰器就是一个函数，它接受一个参数，然后返回一个函数，返回的函数可以被附加到类、方法或属性上。

## 控制器装饰器

控制器装饰器是 Nest.js 中定义路由的主要方式。你可以使用@Controller 装饰器来创建控制器类，并使用@Get、@Post、@Put 等装饰器来定义路由处理程序方法。这使得路由的定义变得非常直观和易于维护。

```javascript
@Controller("items")
export class ItemsController {
  @Get()
  findAll(): string {
    return "This action returns all items";
  }
}
```

## 参数装饰器

Nest 提供了一组有用的参数装饰器，可以将它们与 HTTP 路由处理程序一起使用。参数装饰器允许你在控制器方法中访问请求对象、响应对象和其他相关信息。

```javascript
@Get(':id')
findOne(@Param('id') id: string): string {
  return `This action returns item ${id}`;
}

```

这里只介绍部分常用的装饰器，可以涵盖大部分业务场景，更多装饰器请参考[官方文档](https://docs.nestjs.com/custom-decorators)。

- 路由装饰器（Route decorators）：

  - @Get()：定义处理 GET 请求的路由。

  - @Post()：定义处理 POST 请求的路由。

  - @Put()：定义处理 PUT 请求的路由。

  - @Delete()：定义处理 DELETE 请求的路由。

  - @Patch()：定义处理 PATCH 请求的路由。

- 请求体装饰器（Request body decorators）：

  - @Body()：从请求体中提取数据。

  - @Query()：从查询参数中提取数据。

  - @Param()：从路由参数中提取数据。

  - @Headers()：从请求头中提取数据。

- 响应装饰器（Response decorators）：

  - @Res()：注入原生 response 对象。

  - @Headers()：设置响应头。

- 状态码装饰器（Status code decorators）：

  - @HttpCode()：设置响应的状态码。

## 自定义装饰器

有时，你可能需要创建自定义装饰器以满足特定的需求。你可以使用@Injectable()装饰器来创建可注入的服务，然后在需要的地方使用@Inject 装饰器来注入这些服务。

```javascript
@Injectable()
export class MyService {
  getHello(): string {
    return 'Hello from MyService!';
  }
}

@Controller('items')
export class ItemsController {
  constructor(private readonly myService: MyService) {}

  @Get()
  getHello(): string {
    return this.myService.getHello();
  }
}
```
