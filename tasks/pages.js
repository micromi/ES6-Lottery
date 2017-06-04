import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages', () => {
  return gulp.src('app/**/*.ejs') // 打开文件
    .pipe(gulp.dest('server')) // 输出(拷贝)到指定目录
    .pipe(gulpif(args.watch, livereload()));// 如果文件变化了，命令行有watch选项，实现热更新
})