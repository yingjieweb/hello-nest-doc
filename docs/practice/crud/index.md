# CRUD 接口实现

Nest CLI 贴心的为我们提供了快速生成模块的命令，我们只需要输入命令，就可以生成一个完整的模块。

注意脚本命令执行的路径，一般在 src/modules 路径下执行。

```shell
$ nest generate|g module|mo user
$ nest generate|g controller|co user
$ nest generate|g service|s user
```

## 准备 user 模块

执行上述脚本，可以生成一个完整的 user 模块。具体文件及代码如下：

🚩 src/modules/user/user.module.ts

```javascript
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

🚩 src/modules/user/user.controller.ts

```javascript
import { Controller } from "@nestjs/common";

@Controller("user")
export class UserController {}
```

🚩 src/modules/user/user.service.ts

```javascript
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {}
```

此外，还有对应的 controller 和 service 的测试文件，这里不做介绍。

注意，不要忘记在 app.module.ts 中引入 user 模块。

```javascript
// app.module.ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## controller 相关编码

```javascript
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserItem } from 'src/core/types/user';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getUserList')
  getUserList(): UserItem[] {
    return this.userService.getUserList();
  }

  @Post('addUser')
  addUser(@Body() userData): UserItem[] {
    return this.userService.addUser(userData);
  }

  @Get('getUserDetail/:id')
  getUserDetail(@Param('id') id: string): UserItem {
    return this.userService.getUserDetail(id);
  }

  @Put('updateUser')
  updateUser(@Body() userData): UserItem[] {
    return this.userService.updateUser(userData);
  }

  @Delete('deleteUser')
  deleteUser(@Query() query): UserItem[] {
    return this.userService.deleteUser(query.id);
  }
}
```

## service 相关编码

```javascript
import { Injectable } from '@nestjs/common';
import { UserItem } from 'src/core/types/user';

@Injectable()
export class UserService {
  private userList = []; // 没有数据库，暂时通过该方式定义数据

  getUserList(): UserItem[] {
    return this.userList;
  }

  addUser(userData: UserItem): UserItem[] {
    this.userList.push(userData);
    return this.userList;
  }

  getUserDetail(targetUserId: string): UserItem {
    const targetUserArray = this.userList.filter(
      (item) => item.id === parseInt(targetUserId),
    );
    return targetUserArray[0] || {};
  }

  updateUser(userData: UserItem): UserItem[] {
    this.userList = this.userList.map((item) => {
      if (item.id === userData.id) {
        return userData;
      }
      return item;
    });
    return this.userList;
  }

  deleteUser(deleteId): UserItem[] {
    this.userList = this.userList.filter(
      (item) => item.id !== parseInt(deleteId),
    );
    return this.userList;
  }
}
```

到这里我们的用户管理模块就完成了，是不是很简单？这个时候就可以通过  `nest start` 启动我们的服务了，然后在 postman 里面测试一下。快去试试吧 🎊