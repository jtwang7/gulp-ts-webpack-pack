import path from "node:path";
import { fileURLToPath } from "node:url";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const babelOptions = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
  exclude: "node_modules/**",
};

export default {
  input: path.resolve(__dirname, "./components/index.tsx"),
  output: [
    {
      dir: path.resolve(__dirname, "./rollup/esm"),
      format: "es",
      sourcemap: true,
    },
    // {
    //   dir: path.resolve(__dirname, "./rollup/umd"),
    //   format: "umd",
    //   name: "@tian/ui",
    //   sourcemap: true,
    // },
    // {
    //   dir: path.resolve(__dirname, "./rollup/cjs"),
    //   format: "cjs",
    //   sourcemap: true,
    // },
  ],
  plugins: [resolve(), commonjs(), typescript(), json(), babel(babelOptions)],
  preserveModules: true,
};
