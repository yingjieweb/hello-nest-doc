# JS 渐进增强

> [Nest (NestJS)](https://nestjs.bootcss.com/)利用 JavaScript 的<u>渐进增强</u>的能力，使用并完全支持 [TypeScript](https://www.typescriptlang.org/) （仍然允许开发者使用纯 JavaScript 进行开发），并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数响应式编程）。

渐进增强？JavaScript 还有这种能力？shift！我怎么不知道？🤨

我一开始看到这个词的时候，是一脸懵，但是后续了解了一下，并不是什么什么新东西，只是换个说法罢了。🤷

具体来说，渐进增强是指你可以从基本的 JavaScript 开始，然后逐步引入 TypeScript 特性，如类型检查、接口、装饰器等，以提高代码的可维护性和可读性。这样的设计考虑到了不同开发者的偏好和项目的需求，使得 Nest.js 可以适应广泛的开发场景。

Nest 利用 JavaScript 的渐进增强能力，意味着它建立在纯 JavaScript 的基础上，并通过 TypeScript 提供额外的功能。这种设计允许开发者根据需要选择使用 TypeScript 或纯 JavaScript 进行开发。

举个例子 🌰，假设你开始一个新的 Nest.js 项目，一开始你可能只使用 JavaScript。然后，当项目逐渐变得复杂，需要更强的类型检查和更好的代码组织时，你可以选择将代码转换为 TypeScript。这样，你可以利用 TypeScript 提供的强大工具来减少错误、提高代码质量，并在开发过程中提供更好的开发体验。

在 Nest 中，你可以从 JavaScript 文件开始，然后在需要的时候将文件更改为 TypeScript。这种渐进增强的方法使得 Nest.js 可以灵活地适应各种项目的需求和开发者的偏好。
