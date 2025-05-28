const { src, dest, gulp } = require("gulp");
const tsProject = require("gulp-typescript").createProject("tsconfig.json");

function compileTypeScript() {
  const ts = require("gulp-typescript");
  const res = tsProject.src().pipe(tsProject()).pipe(dest("dist"));
  return res.on("end", () => {
    console.log("TypeScript compilation completed. ✨");
  });
}

function watchFiles() {
  gulp.watch("src/**/*.ts", compileTypeScript);
}

function defaultTask(cb) {
  compileTypeScript();
  cb(); // Signal completion to Gulp
}
exports.default = defaultTask;

exports.build = compileTypeScript;
exports.watch = watchFiles;
