# gulp-ts-webpack-pack

- [x] 基于 Gulp+TypeScript+Webpack 简单实现 React 组件库的打包构建工具。
- [x] 基于 Rollup 简单实现 React 组件库的打包构建工具。
- [x] 在 React 环境编写测试用例，测试打包结果。

## Gulp+TypeScript_Webpack 使用

1. 安装依赖

  ```js
  cd library/gulp_tsc_webpack
  pnpm i // 可能需要权限。mac 中运行如下命令: sudo pnpm i。
  ```

2. 构建产物

  ```js
  // 构建 umd。产物输出在 /dist 路径下
  pnpm run build

  // 构建 esm, cjs。产物输出在 /es 和 /lib 路径下
  pnpm run compile
  ```

## Rollup 使用

1. 安装依赖

  ```js
  cd library/rollup
  pnpm i // 可能需要权限。mac 中运行如下命令: sudo pnpm i。
  ```

2. 构建产物

  ```js
  // 构建 umd。产物输出在 /dist 路径下
  pnpm run build:umd

  // 构建 esm。产物输出在 /es 路径下
  pnpm run build:esm

  // 构建 cjs。产物输出在 /lib 路径下
  pnpm run build:cjs
  ```