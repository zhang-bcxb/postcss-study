## 项目说明

- 技术文档

```
中文文档：https://www.postcss.com.cn/
GitHub 地址：https://github.com/postcss/postcss
```

- 环境搭建

```
安装依赖：npm i -D postcss postcss-cli

处理CSS文件：此时还没有配置插件，所以两个 CSS 文件还是一样的
npx postcss src/style.css -o dist/dist.css

postcss: 是一个用于处理CSS的工具，它可以通过插件来转换、优化和处理CSS代码。它的灵活性使得可以通过配置不同的插件来执行各种CSS转换任务。
postcss-cli: 是PostCSS的命令行工具，可以在终端中运行，用于处理CSS文件。你可以使用它来应用不同的PostCSS插件，执行自定义的CSS处理操作。

postcss.config.js 配置文件，可以简化命令行
```

## 相关插件说明

- autoprefixer

```
autoprefixer 是一个自动为 CSS 添加厂商前缀的工具，它用于解决不同浏览器对于新的 CSS 特性的支持差异问题。在前端开发中，不同浏览器可能需要不同的前缀以正确地渲染一些 CSS 属性。

GitHub 地址：https://github.com/postcss/autoprefixer
安装依赖：npm i -D autoprefixer

处理 CSS 文件：
npx postcss src/style.css -o dist/dist.css -u autoprefixer
查看哪些属性需要加上前缀
npx autoprefixer --info

降低目标浏览器版本
修改 package.json，覆盖 99.5% 的浏览器
"browserslist": [
  "cover 99.5%"
]
```

- postcss-preset-env

```
postcss-preset-env 是一个 PostCSS 插件，它的作用是根据最新的 CSS 规范和浏览器支持情况，自动转换和添加需要的 CSS 前缀以及将一些新的 CSS 特性转换成浏览器可理解的代码。

GitHub：https://github.com/csstools/postcss-plugins
安装依赖：npm i -D postcss-preset-env
```

- postcss-pxtorem

```
postcss-pxtorem 是一个 PostCSS 插件，它用于将像素（px）单位的样式值自动转换为相对单位（如 rem 或 em），以便实现响应式设计和适应不同屏幕尺寸的需求。

安装依赖：npm i -D postcss-pxtorem
```
