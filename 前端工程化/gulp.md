# GULP 高质量的插件：打包、压缩、合并、git、远程操作

## 安装

```js
npm install -g gulp
npm install gulp -D
touch gulpfile.js
gulp--help
```

## 语法 gulp.src|gulp.dest|gulp.task|gulp.watch

```js
var watcher = gulp.watch('js/**/*.js',['uglify','reload'])
watcher.on('change',function(event){
    console.log('File'+event.path+'was'+event.type+',running tasks...')
})
```