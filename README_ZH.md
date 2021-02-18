[English](./README.md) | [简体中文](./README_ZH.md)

![Let's Start.Page](./docs/image/letsstartpage.jpg)

# Let's Start.Page

你是软件开发者吗？你需要一个与众不同的浏览器开始页面！让我们从这里开始：[Let's Start.Page](https://letsstart.page)

来自中国大陆的开发者可以使用 [https://start.renfei.net](https://start.renfei.net) 来高速访问。

## 构建方式

```bash
# 安装依赖
$ yarn

# 运行在 localhost:3000，并支持热更新
$ yarn dev

# 为生产服务器构建和启动
$ yarn build
$ yarn start

# 生成静态项目
$ yarn generate
```
有关如何工作的详细说明，请查看 [Nuxt.js docs](https://nuxtjs.org).

## (i18n) 国际化

如果您希望参与项目国际化语言翻译，请阅读此说明。

### README.md 国际化

例如：添加西班牙语支持。

首先，在项目根目录新建一个 ```README_ES.md```，并根据 ```README.md``` 的内容翻译为西班牙语。

### Let's Start.Page 国际化

例如：添加西班牙语支持。

首先，在项目目录 ```/lang``` 中新建一个 ```es-ES.js```文件，将 ```en-US.js``` 的内容复制进来翻译为西班牙语。
