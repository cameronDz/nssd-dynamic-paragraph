// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: '',
    browsers: ['ChromeHeadless'],
    client: {
      clearContext: false
    },
    colors: true,
    coverageIstanbulReporter: {
      fixWebpackSourcePaths: true,
      reports: ['text-summary']
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      instrumenterOptions: {
        istanbul: { noCompact: true }
      },
      reporters: [
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text-summary', subdir: '.', file: 'basic.txt' }
      ]
    },
    frameworks: ['@angular-devkit/build-angular', 'jasmine'],
    logLevel: config.LOG_INFO,
    plugins: [
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-jasmine'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    port: 9876,
    reporters: ['coverage', 'coverage-istanbul', 'progress'],
    restartOnFileChange: false,
    singleRun: true
  });
};
