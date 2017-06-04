import yargs from 'yargs'; // 处理命令行参数的

const args = yargs

  .option('production', {　// 区分开发环境和生产环境 
    boolean: true,
    default: false,
    describe: 'min all scripts'
  })

  .option('watch', { // 监听开发环境修改的文件
    boolean: true,
    default: false,
    describe: 'watch all files'
  })

  .option('verbose', { // 输入命令行日志
    boolean: true,
    default: false,
    describe: 'log'
  })

  .option('sourcemaps', { // 生产sroucemap文件
    describe: 'force the creation of sroucemaps'
  })

  .option('port',{ // 设置服务器端口
    string: true,
    default: 8080,
    describe: 'server port'
  })

  .argv;  // 对命令行输入内容以字符串解析

  export default args;
  