# images-compression とは
タスクランナーである gulp を使用し、ワンクリック（ command or bat ファイル ） または gulp コマンドで画像を圧縮するツール。  
画像は、 ``jpg``  ``jpeg``  ``png``  ``gif``  ``svg`` ファイルに対応しています。  
このツールは、 ``gulp`` ``gulp-imagemin`` ``imagemin-mozjpeg`` ``imagemin-pngquant`` ``gulp-changed`` を使用しています。


# Install

```bash
cd /path/to/images-compression
npm install
```


# Starting the Images Compression
1.  ``cd /path/to/images-compression/src/images/`` に圧縮前の画像を配置します。
2.  ``compressionRun.command ( Mac 用 )`` または、 ``compressionRun.bat ( Windows 用 )`` をクリックすると、画像が圧縮されます。
3.  ``cd /path/to/images-compression/src/dist/`` に ``images`` ディレクトリと圧縮された画像が生成されています。

