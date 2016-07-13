// Karma configuration
// Generated on Tue Jul 12 2016 21:49:15 GMT-0400 (EDT)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'tests/test-main.js',
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'src/**/*.js.map', included: false},
      {pattern: 'src/**/*.ts', included: false},
      {pattern: 'tests/**/*.js', included: false},
      {pattern: 'tests/**/*.js.map', included: false},
      {pattern: 'tests/**/*.ts', included: false},
      {pattern: 'node_modules/angular/angular.js', included: false},
      {pattern: 'node_modules/angular-mocks/angular-mocks.js', included: false}
    ],


    // list of files to exclude
    exclude: [
      // 'tests/utils/**/*.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    plugins: [
      require('karma-mocha'),
      require('karma-requirejs'),
      require('karma-chai'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher')
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'/*, 'Firefox'*/],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
