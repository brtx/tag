// Karma configuration
// Generated on Sun Nov 02 2014 01:13:29 GMT+0100 (W. Europe Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'test/fixtures/*.html',
      'test/utilities/*.js',
      'test/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    preprocessors: {
      'test/fixtures/*.html': ['html2js']
    },
    

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
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // PhantomJS is not possible at the moment due the lack of webcomponents support
    browsers: ['Firefox_with_webcomponents'],

    customLaunchers: {
      Firefox_with_webcomponents: {
        base: 'Firefox',
        prefs: { 'dom.webcomponents.enabled': true }
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
