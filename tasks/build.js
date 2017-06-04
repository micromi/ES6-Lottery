import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; // 处理任务关联关系和先后顺序

// 任务顺序：清空目录，拷贝css，编译模板，执行脚本，然后执行文件监听，启动服务
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser','serve']));