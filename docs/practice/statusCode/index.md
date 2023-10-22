# 设置状态码

在正常情况下，默认情况下，Nest.js 会自动设置响应的状态码为 200。如果没有显式地设置状态码，Nest.js 会将响应的状态码设置为 200，表示请求成功。当使用 class-validator 库的装饰器对 DTO 进行校验时，如果校验失败，Nest.js 会自动抛出一个 BadRequestException 异常，状态码为 400，包含有关校验错误的详细信息。

那如果我想手动设置状态码呢？

## 通过 @HttpCode() 装饰器设置

```javascript
// src/modules/user/user.controller.ts
import { Controller, Get, Param, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUserDetailDto } from './dto/getUserDetail.dto';
import { UserItem } from 'src/core/types/user';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUserDetail/:id')
  @HttpCode(200)
  getUserDetail(
    @Param('id', GetUserDetailDto) id: string,
  ): UserItem | HttpException {
    const targetUser = this.userService.getUserDetail(id);
    if (targetUser) {
      return targetUser;
    } else {
      throw new HttpException('User was not found', HttpStatus.NOT_FOUND);
    }
  }
}
```

![](/images/httpCode.png)

## 通过 @Res() 参数装饰器设置

```javascript
// src/modules/user/user.controller.ts
import { Controller, Get, Param, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUserDetailDto } from './dto/getUserDetail.dto';
import { Response } from 'express';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUserDetail/:id')
  getUserDetail(
    @Param('id', GetUserDetailDto) id: string,
    @Res() res: Response,
  ): void {
    const targetUser = this.userService.getUserDetail(id);
    if (targetUser) {
      res.status(200).json(targetUser);
    } else {
      res.status(404).json({ message: 'User was not found' });
    }
  }
}
```

![](/images/res.png)

## @HttpCode() vs. @Res()

- @HttpCode() 装饰器用于设置控制器方法的返回状态码。它可以在控制器方法上直接使用，并指定所需的状态码。例如，@HttpCode(200) 将设置返回状态码为 200。这个装饰器只会影响返回的状态码，而不会对响应的内容进行其他处理。经常需要配合 HttpException 一起使用。

- @Res() 参数装饰器用于将 Express 的 Response 对象注入到控制器方法中，以便你可以直接操作响应。通过 @Res()，你可以访问和修改响应的状态码、头部信息、发送响应等。这个装饰器提供了更灵活的方式来处理响应，并且你可以在控制器方法中进行更多的定制。
