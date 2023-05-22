const gulp = require("gulp");
const path = require("path");
const rimraf = require("rimraf");
const ts = require("gulp-typescript");
const babel = require("gulp-babel");
const less = require("gulp-less");
const LessAutoprefix = require("less-plugin-autoprefix");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const merge2 = require("merge2");

const autoprefix = new LessAutoprefix({ browsers: ["last 2 versions"] });

// gulp-typscript using tsconfig.json
// https://www.npmjs.com/package/gulp-typescript#using-tsconfigjson
const tsConfig = ts.createProject("tsconfig.json");

function getProjectPath(name) {
  // process.cwd() 返回 Node.js 进程的当前工作目录。
  return path.resolve(process.cwd(), name);
}

// 不同模块规范的输出目录
const libDir = getProjectPath("lib");
const esDir = getProjectPath("es");

const source = [
  "components/**/*.tsx",
  "components/**/*.ts",
  "!node_modules/**/*.*",
  "!components/**/styles/*.tsx",
];

function babelify(stream) {
  const babelConfig = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: ["@babel/transform-runtime"],
  };
  return stream.pipe(babel(babelConfig));
}

function compileCss(modules) {
  const dir = path.resolve(modules === true ? esDir : libDir, "./style");
  const stream = gulp
    .src(["components/**/styles/*.less"])
    .pipe(less({ plugins: [autoprefix] }))
    .pipe(gulp.dest(dir))
    .pipe(concat("index.css"))
    .pipe(gulp.dest(dir))
    .pipe(cleanCss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(dir));
  return stream;
}

function compile(modules) {
  const targetDir = modules === true ? esDir : libDir;
  rimraf.sync(targetDir);

  const cssStream = compileCss(modules);

  // 读取 source, 文件流经过 ts 编译, 返回 js 和 dts 文件流
  const stream = gulp.src(source).pipe(tsConfig());
  const dtsStream = stream.dts.pipe(gulp.dest(targetDir));
  const jsStream = (modules ? stream.js : babelify(stream.js)).pipe(
    gulp.dest(targetDir)
  );

  return merge2([jsStream, dtsStream, cssStream].filter((s) => s));
}

// task
const compileEs = (cb) => {
  compile(true).on("finish", cb);
};
const compileLib = (cb) => {
  compile(false).on("finish", cb);
};

exports.compile = gulp.series(compileEs, compileLib);
