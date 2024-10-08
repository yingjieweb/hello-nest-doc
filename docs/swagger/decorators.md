# 装饰器介绍

在你的 Nest.js 控制器、路由和 DTO 类中，你可以使用装饰器来添加 Swagger 文档注释，以描述每个端点的参数、响应、描述等信息。相关装饰器如下：

- @ApiTags(tags: string[]): 用于给控制器或方法添加标签，用于组织和分类 API 文档

- @ApiOperation(options: OperationOptions): 用于给方法添加操作信息，包括方法的摘要、描述、响应等

- @ApiParam(options: ApiParamOptions): 用于给方法定义请求参数的描述信息

- @ApiQuery(options: ApiQueryOptions): 用于给方法定义查询参数的描述信息

- @ApiBody(options: ApiBodyOptions): 用于给方法定义请求体的内容

- @ApiProperty(options: ApiPropertyOptions): 用于给模型定义各属性的描述信息

- @ApiResponse(options: ApiResponseOptions): 用于给方法添加响应的描述信息

- @ApiHeader(options: ApiHeaderOptions): 用于定义请求头的描述信息

了解更多：[https://github.com/nestjs/swagger](https://github.com/nestjs/swagger)
