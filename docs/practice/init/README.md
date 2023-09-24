# 脚手架安装 & 项目初始化

### 方式一
在此之前，你需要安装  [Node.js](https://nodejs.org/en)，然后执行如下命令：

```javascript
$ npm i -g @nestjs/cli
 
$ nest -v // 9.5.0
 
$ nest new hello-nest // project name
 
// "@nestjs/common": "^9.0.0",
// "@nestjs/core": "^9.0.0",
// "@nestjs/platform-express": "^9.0.0",
```

这是初始化后的项目仓库： [hello-nest](https://github.com/yingjieweb/hello-nest)

### 方式二

官方也有推荐其他的初始化项目的方式 → 使用 Git 安装采用 TypeScript 开发的 starter 项目：

```
$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start
```

打开浏览器并导航到 http://localhost:3000/ 地址。

若要安装基于 JavaScript 的 starter project，请在执行上面的命令时使用 javascript-starter.git 。
