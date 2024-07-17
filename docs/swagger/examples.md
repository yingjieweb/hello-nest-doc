# 配置示例

```javascript
// src/modules/user/user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
@ApiTags('用户相关接口')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('addUser')
  @ApiOperation({
    summary: '获取用户列表',
    // description: '获取所有的用户列表',
  })
  @ApiResponse({
    status: 200,
    description: '成功返回200',
    schema: {
      type: 'array',
      example: [
        {
          id: 1,
          name: '张三',
          age: 18,
          gender: 1,
        },
      ],
    },
  })
  addUser(@Body() userData: AddUserDto): UserItem[] {
    return this.userService.addUser(userData);
  }
}
```

```javascript
// src/modules/user/dto/addUser.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsIn } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AddUserDto {
  @IsNotEmpty({ message: "id should not be empty" })
  @IsNumber({ allowNaN: false }, { message: "id must be a number" })
  @ApiProperty({ example: 1, description: "用户唯一 id" })
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "张三", description: "用户名" })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 18, description: "用户年龄" })
  age: number;

  @IsNotEmpty()
  @IsIn([1, 2])
  @ApiProperty({ example: 1, description: "用户性别： 1 -> 男、2 -> 女" })
  gender: 1 | 2;
}
```

配置完成访问：[http://localhost:3000/swagger](http://localhost:3000/swagger)

![](/images/swagger.png)

🚩 当然，如果你觉得 Swagger 界面不符合你风格的话，可以试试：[https://app.apifox.com/](https://app.apifox.com/)
