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
      dir: path.resolve(__dirname, "./es"),
      format: "esm",
      sourcemap: true,
      preserveModules: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({
      compilerOptions: {
        declarationDir: path.resolve(__dirname, "./es/library/rollup/types"),
      },
    }),
  ],
  external: ["react", "react-dom"],
};
