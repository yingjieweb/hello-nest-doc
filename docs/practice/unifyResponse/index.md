# 统一响应体结构

Why？构建统一的响应体数据结构的好处是，它方便前端开发人员拦截和处理响应，提高代码可读性，并为错误处理提供统一的结构和信息，从而提升开发效率。

## 封装统一响应工具函数

```javascript
// src/core/utils/resWrapper.util.ts
function RES_WRAPPER<T>(
  data: T,
  msg: string,
  code: number
): Common.CommonRes<T> {
  return {
    data,
    msg,
    code,
  };
}
export function SUCCESS_RES<T>(data: T, msg = "success") {
  return RES_WRAPPER(data, msg, 200);
}
export function ERROR_RES(msg: string, code = 400, data?: any) {
  return RES_WRAPPER(data, msg, code);
}
```

```javascript
// src/modules/user/user.controller.ts
@Get('/getUserList')
getUserList(): Common.CommonRes<UserItem[]> {
  const userList = this.userService.getUserList();
  return SUCCESS_RES(userList, 'success');
}
```

```javascript
// src/modules/user/user.controller.ts
@Get('getUserDetail/:id')
getUserDetail(
  @Param('id', GetUserDetailDto) id: string,
  @Res() res: Response,
): void {
  const targetUser = this.userService.getUserDetail(id);
  if (targetUser) {
    res.status(200).json(SUCCESS_RES(targetUser));
  } else {
    res.status(404).json(ERROR_RES('User was not found'));
  }
}
```

## 封装统一响应过滤器

- 封装异常响应过滤器

```javascript
import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // 获取请求上下文
    const response = ctx.getResponse(); // 获取请求上下文中的 response对象
    const status = exception.getStatus(); // 获取异常状态码

    // 设置错误信息
    const message = exception.message
      ? exception.message
      : `${status >= 500 ? "Service Error" : "Client Error"}`;
    const errorResponse = {
      data: {},
      message: message,
      code: -1,
    };

    // 设置返回的状态码，发送错误信息
    response.status(status).json(errorResponse);
  }
}
```

- 正常响应拦截器

```javascript
import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          code: 0,
          msg: "请求成功",
        };
      })
    );
  }
}
```

- 在 main.ts 中全局注册

```javascript
import { TransformInterceptor } from "./path/to/your/interceptor";
import { HttpExceptionFilter } from "./path/to/your/filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局注册的响应过滤器
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}
bootstrap();
```

这样就可以统一的返回错误请求了，只需要抛出异常即可，比如：

```javascript
throw new HttpException("User was not found", 404);
```
