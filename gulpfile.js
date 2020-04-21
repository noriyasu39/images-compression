const gulp = require("gulp");

// 画像を圧縮するプラグインの読み込み
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const changed = require("gulp-changed");

// 画像のディレクトリを定義 (相対パス)
const paths = {
  // 圧縮前のパス
  images: "src/images/",
  // 圧縮後のパス
  dist: "src/dist/images/"
}

/**
 * 画像圧縮のタスク
 */
const imagCompression = () => {
  return gulp
    .src(`${paths.images}**/*.{jpg,jpeg,png,gif,svg}`)
    .pipe(changed(paths.dist)) // images と dist を比較して、差分だけを圧縮する
    .pipe(
      imagemin([
        pngquant({
          quality: [.7, .85], // 画質の指定
          speed: 1, // 変換スピードの設定。1 ~ 10 の数値を設定。1 がもっとも高品質
        }),
        mozjpeg({
          quality: 85, // 画質の指定
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
    .pipe(imagemin()) // ガンマ情報を除去
    .pipe(gulp.dest(paths.dist)); //保存
};

exports.default = imagCompression;
