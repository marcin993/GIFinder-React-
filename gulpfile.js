const browserSync = require("browser-sync").create(),
      gulp = require("gulp"),
      webpack = require("gulp-webpack"),
      path = require("path"),
      uglify = require("gulp-uglify"),
      sass = require("gulp-sass"),
      rename = require("gulp-rename"),
      cleanCSS = require("gulp-clean-css");


gulp.task("serve", function() {
    browserSync.init({
        server: "dist"
    });

    gulp.watch("src/sass/*.scss", ['styles']);
    gulp.watch("dist/*.html", browserSync.reload)
    gulp.watch("src/*.js", ["webpack"]);
    gulp.watch("src/**/*.js", ["webpack"]);
    gulp.watch("src/**/*.jsx", ["webpack"]);
    gulp.watch("src/**/*.scss", ["sass"]);
});

gulp.task("sass", function() {
  return gulp.src("src/scss/main.scss")
          .pipe(sass().on("error", sass.logError))
          .pipe(cleanCSS())
          .pipe(rename("style.min.css"))
          .pipe(gulp.dest("dist/css"))
          .pipe(browserSync.stream());
});

gulp.task("webpack", function() {
  return gulp.src("src/main.jsx")
          .pipe(webpack({
            output: {
              filename: "bundle.min.js"
            },
            module: {
              loaders: [
                {
                  test: /\.jsx?$/,
                  loader: "babel-loader",
                  include: path.join(__dirname, "src")
                }
              ]
            }
          }))
          .pipe(gulp.dest("dist/js"))
          .pipe(browserSync.stream());
});

gulp.task("default", ["serve"])
