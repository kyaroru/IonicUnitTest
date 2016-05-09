// Karma configuration
// Generated on Fri May 06 2016 10:46:31 GMT+0800 (Malay Peninsula Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'www/lib/ionic/js/angular/angular.js',
      'www/lib/ionic/js/angular/angular-animate.js',
      'www/lib/ionic/js/angular/angular-sanitize.js',
      'www/lib/ionic/js/angular/angular-resource.js',

      'www/lib/ionic/js/angular-ui/angular-ui-router.js',

      'www/lib/ionic/js/ionic.js',
      'www/lib/ionic/js/ionic-angular.js',

      'www/lib/angular-mocks/angular-mocks.js',

      'www/js/**/*.js',
      'www/app.js',

      'tests/unit/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'www/js/**/*.js': ['coverage']
    },

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-junit-reporter',
      'karma-coverage',
      'karma-jenkins-reporter'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'jenkins', 'coverage'],

    coverageReporter : {
      type : 'cobertura',
      dir  : 'target/coverage-reports/'
    },

    // saves report at `target/surefire-reports/TEST-*.xml` because Jenkins
    // looks for this location and file prefix by default.
    // junitReporter    : {
    //   outputFile : 'target/surefire-reports/TEST-results.xml'
    // },

    jenkinsReporter: {
      outputFile: 'test-results.xml',
      suite: 'karma',                 // this will be mapped to the package
      classnameSuffix: 'browser-test'
    },

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
    browsers: ['PhantomJS'],//PhantomJS


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
