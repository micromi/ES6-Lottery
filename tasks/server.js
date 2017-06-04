import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; // 启动一个脚本作为服务器的包
import args from './util/args';

gulp.task('serve',(cb)=>{
  if(!args.watch) return cb(); // 不是处于监听状态，返回回调函数
  // 处于监听状态，创建一个服务器
  var server = liveserver.new(['--harmony','server/bin/www']);
  // 启动服务器
  server.start();
  // 热更新 (监听js,ejs文件)
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);
  })
  // 监听需要重启服务的文件
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    // 重启服务器
    server.start.bind(server)()
  });
})
