import gulp from 'gulp';
import del from 'del';
import args from './util/args';

// 清空指定目录文件
gulp.task('clean', () => {
  return del(['server/public', 'server/views']);
});