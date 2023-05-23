import path from "node:path";
import { fileURLToPath } from "node:url";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  input: path.resolve(__dirname, "./components/index.tsx"),
  output: [
    {
      file: path.resolve(__dirname, "./dist/index.min.js"),
      format: "umd",
      name: "@tian/ui-rollup", // umd 需要提供 name，将作为全局名称挂在到 window 对象上。
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ compilerOptions: { declaration: false } }),
    json(),
  ],
};
