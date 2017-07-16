module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: ['test/**/*.js', 'node_modules/xterm/dist/xterm.js', 'xterm-terminal.js'],
    reporters: ['progress'],
    port: 9876,  // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    concurrency: Infinity,
    customContextFile: 'test/context.html'
  });
};
