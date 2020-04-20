const gulp = require("gulp");

// 画像を圧縮するプラグインの読み込み
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const changed = require("gulp-changed");

// images フォルダの画像を圧縮して、dist フォルダに保存する
gulp.task("default", () => {
  return gulp
    .src("src/images/**/*.{jpg,jpeg,png,gif,svg}")
    .pipe(changed("dist")) // images と dist を比較して、差分のあるものだけを圧縮する
    .pipe(
      imagemin([
        pngquant({
          quality: [.7, .85], // 画質
          speed: 1, // 変換スピードの設定。1 ~ 10 の数値を設定。1 がもっとも高品質
        }),
        mozjpeg({
          quality: 85, // 画質
          progressive: true
        }),
        imagemin.gifsicle({
          interlaced: false,
        }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false },
          ]
        }),
      ]),
    )
    .pipe(gulp.dest("./src/dist/")); //保存
});
