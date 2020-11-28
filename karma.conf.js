// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
// const jasmineReporters = require('jasmine-reporters');

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
      // jasmineReporters,
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-jasmine'),
      // require('@types/jasmine'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter')
    ],
    port: 9876,
    reporters: [
      'coverage',
      'coverage-istanbul',
      'progress',
      'junit'
      // new jasmineReporters.JUnitXmlReporter({
      //   consolidateAll: true,
      //   savePath: './',
      //   filePrefix: 'xmlresults' })
      ],

    // the default configuration
    junitReporter: {
      outputDir: require('path').join(__dirname, './coverage'), // results will be saved as $outputDir/$browserName.xml
      outputFile: 'test', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {}, // key value pair of properties to add to the <properties> section of the report
      xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
    },
    restartOnFileChange: false,
    singleRun: true
  });
};
