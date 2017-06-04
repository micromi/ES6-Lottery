import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; //启动脚本作为服务器的包
import args from './util/args';

gulp.task('serve', (cb) => {
  if (!args.watch) {
    return cb();
  }
  var server = liveserver.new(['--harmony', 'server/bin/www']); // --harmony: 当前命令行下执行后面参数的控制脚本
  // 启动服务器
  server.start();

  // 热更新 (监听js,ejs文件)
  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], (file) => {
    server.notify.apply(server, [file]);
  })

  // 监听需要重启服务的文件
  gulp.watch(['server/routes/**/*.js', 'server/app.js'], () => {
    // 重启服务器
    server.start.bind(server)();
  })
})