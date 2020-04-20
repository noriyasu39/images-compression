const gulp = require("gulp");

// 画像を圧縮するプラグインの読み込み
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const changed = require("gulp-changed");

// srcImgフォルダのjpg,png画像を圧縮して、distImgフォルダに保存する
gulp.task("default", function () {
  return gulp
    .src("./src/srcImg/**/*.{png,jpg}") // srcImgフォルダ以下のpng,jpg画像を取得する
    .pipe(changed("distImg")) // srcImg と distImg を比較して異なるものだけ圧縮する
    .pipe(
      imagemin([
        pngquant({
          quality: "70-85", // 画質
          speed: 1 // スピード
        }),
        mozjpeg({
          quality: 85, // 画質
          progressive: true
        }),
      ]),
    )
    .pipe(gulp.dest("./src/distImg/")); //保存
});
