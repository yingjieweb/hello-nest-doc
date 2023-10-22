# 参数校验

在 Nest.js 中，可以使用类验证器（[class-validator](https://github.com/typestack/class-validator)）库来进行参数校验。

🤔️ 思考一下：Nest.js 中的请求参数是如何进行校验的？Nest.js 明明是可以支持 TS 的，为什么还要使用第三方库来校验参数呢？

🎤 虽然 TypeScript 提供了静态类型检查，但类验证器可以为你的 DTO（Data Transfer Object）和实体类提供更强大的运行时校验。这意味着你可以在应用程序运行时捕获并处理不符合规范的数据，而不仅仅是在编译时发现问题。

```javascript
$ npm install class-validator class-transformer

// class-validator 常用的装饰器:
// @IsNumber()：验证值是否为数字类型
// @IsString()：验证值是否为字符串类型
// @IsBoolean()：验证值是否为布尔类型
// @IsNotEmpty()：验证值是否非空
// @IsOptional()：验证值是否可选
// @IsEmail()：验证值是否为有效的电子邮件地址
// @IsUrl()：验证值是否为有效的 URL 地址
// @IsDate()：验证值是否为有效的日期
// @Min()：验证值是否大于或等于指定的最小值
// @Max()：验证值是否小于或等于指定的最大值
// @Length()：验证字符串长度是否在指定的范围内
// @Matches()：验证字符串是否匹配指定的正则表达式
// @IsIn()：验证值是否属于指定的允许值列表
// @IsNotEmptyObject()：验证对象是否为非空对象

// 装饰器支持可选参数，例如：@IsNumber({message: 'id is not number!'})
// 具体参数说明：https://github.com/typestack/class-validator#readme
```

## Body & Query 参数验证

- 创建 DTO（数据传输对象）类，用于定义要验证的数据结构和规则。DTO 不是中间件或过滤器，而是一种设计模式，用于处理和验证输入数据。通过使用 DTO 进行参数验证，我们可以在控制器中对请求的数据进行验证，确保数据的完整性和有效性，从而减少错误和异常情况。

```javascript
// src/modules/user/dto/addUser.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsIn } from "class-validator";

export class AddUserDto {
  @IsNotEmpty({ message: "id should not be empty" })
  @IsNumber({ allowNaN: false }, { message: "id must be a number" })
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsIn([1, 2])
  gender: string;
}
```

- 在控制器中使用 DTO 类进行参数校验

```javascript
// src/modules/user/user.controller.ts
import { Controller, Post, Body } from "@nestjs/common";
import { AddUserDto } from "./dto/addUser.dto";
import { DeleteUserDto } from "./dto/deleteUser.dto";

@Controller("users")
export class UserController {
  @Post("addUser")
  addUser(@Body() userData: AddUserDto): UserItem[] {
    return this.userService.addUser(userData);
  }
  @Delete("deleteUser")
  deleteUser(@Query() query: DeleteUserDto): UserItem[] {
    return this.userService.deleteUser(query.id);
  }
}
```

- 在应用程序的主模块中启用参数校验：

```javascript
// src/main.ts
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局使用管道，用于 Controller 层参数校验
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
```

## Params 参数验证

- 自定义管道来验证 Params

```javascript
// src/modules/user/dto/getUserDetail.dto.ts
import { Injectable, PipeTransform, BadRequestException } from "@nestjs/common";

@Injectable()
export class GetUserDetailDto implements PipeTransform {
  async transform(value: string) {
    const targetUserId = parseInt(value);
    if (targetUserId <= 0) {
      throw new BadRequestException("UsedId is positive number");
    }
    return targetUserId;
  }
}
```

- 在控制器中使用封装好的管道验证参数

```javascript
import { Controller, Get, Param } from "@nestjs/common";
import { GetUserDetailDto } from "./dto/getUserDetail.dto";

@Controller("users")
export class UserController {
  @Get("getUserDetail/:id")
  getUserDetail(@Param("id", GetUserDetailDto) id: string): UserItem {
    return this.userService.getUserDetail(id);
  }
}
```
