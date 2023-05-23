const path = require("path");

/**
 * @type {import("webpack").Configuration}
 */
const baseConfig = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "./components/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].min.js", // 打包后的文件名
    library: {
      name: "@tian/ui", // 模块名称: https://webpack.docschina.org/configuration/output/#outputlibraryname
      type: "umd2", // 模块版本: https://webpack.docschina.org/configuration/output/#outputlibrarytype
    },
    clean: true,
  },
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, "node_modules")],
        test: /\.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  cache: {
    type: "filesystem",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".d.ts", ".js"],
  },
  externals: ["react", "react-dom"],
};

module.exports = baseConfig;
