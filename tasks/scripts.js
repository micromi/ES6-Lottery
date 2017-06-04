import gulp from 'gulp';
import gulpif from 'gulp-if'; // gulp做if判断的
import concat from 'gulp-concat'; // 处理文件拼接的
import webpack from 'webpack'; // web打包工具
import gulpWebpack from 'webpack-stream'; // 处理文件流
import named from 'vinyl-named'; // 文件重命名做标记
import livereload from 'gulp-livereload'; // 文件热更新
import plumber from 'gulp-plumber'; // 处理文件信息流的，阻止 gulp 插件发生错误导致进程退出并输出错误日志
import rename from 'gulp-rename'; // 文件重命名
import uglify from 'gulp-uglify'; // 资源压缩
import {log, colors} from 'gulp-util'; // 在命令行工具输出的包(log,color的输出)
import args from './util/args'; // 对命令行参数解析的包
// 脚本编译目录
gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({  // 集中处理gulp错误，防止进程意外终止
      errorHandle:function(){

      }
    }))
    .pipe(named()) // 文件重新命名
    .pipe(gulpWebpack({  // 借助webpack对js进行编译
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{ // 对错误处理
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js')) // 输出到指定目录
    .pipe(rename({  // 重命名文件
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}})) // 压缩文件
    .pipe(gulp.dest('server/public/js')) // 输出压缩重命名后的文件到指定目录
    .pipe(gulpif(args.watch,livereload())) // 如果文件变化了，命令行有watch选项，实现热更新
})
