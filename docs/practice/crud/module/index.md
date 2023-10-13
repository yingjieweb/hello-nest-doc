# 准备 user 模块

Nest CLI 贴心的为我们提供了快速生成模块的命令，我们只需要输入命令，就可以生成一个完整的模块。

```shell
$ nest generate|g module|mo user
$ nest generate|g controller|co user
$ nest generate|g service|s user
```

```javascript
// src/modules/user/userBase.module.ts
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

不要忘记引入

```javascript
// app.module.ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/userBase/user.module";

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
