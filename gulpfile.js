const { task, src, dest, series } = require("gulp");
const inline = require("gulp-inline-source");
const replace = require("gulp-replace");
const rename = require("gulp-rename");
const drop = require("del");

task("designer:inline", () => {
  return src("./dist/designer/app/index.html")
    .pipe(replace('.js"></script>', '.js" inline></script>'))
    .pipe(inline())
    .pipe(rename({ basename: "app" }))
    .pipe(dest("./dist/designer"));
});

task("designer:cleanup", () => {
  return drop("./dist/designer/app/");
});

task("default", series("designer:inline", "designer:cleanup"));
