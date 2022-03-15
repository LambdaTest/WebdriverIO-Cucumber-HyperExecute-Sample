exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  reporters: [
    'cucumberjs-json',

    ['cucumberjs-json', {
      jsonFolder: 'Reports/',
      language: 'en',
    },
    ],
  ],
  runner: 'local',

  hostname: 'hub.lambdatest.com',

  path: '/wd/hub',
  strictSSL: false,
  protocol: 'https',
  port: 443,

  user: process.env.LT_USERNAME,
  key: process.env.AccessKey,


  specs: [
    './Features/*.feature'
  ],
  exclude: [
  ],

  maxInstances: 10,

  capabilities: [
    {
      'LT:Options': {
        maxInstances: 5,
        browserName: 'Chrome',
        browserVersion: 'latest-1',
        platform: 'win10',
        build: 'Wdio Hypertest Sample'
      },
    }],

  logLevel: 'info',

  deprecationWarnings: true,

  bail: 0,

  baseUrl: 'https://www.google.com',

  waitforTimeout: 10000,

  connectionRetryTimeout: 220000,

  connectionRetryCount: 6,




  framework: 'cucumber',

  cucumberOpts: {
    requireModules: ['./babel/register.js'],
    require: ['./StepDefinations/*.spec.js'],        // <string[]> (file/dir) require files before executing features
    backtrace: false,   // <boolean> show full backtrace for errors
    compiler: ['./babel/register.js'],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false,      // <boolean> invoke formatters without executing steps
    failFast: false,    // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true,       // <boolean> disable colors in formatter output
    snippets: true,     // <boolean> hide step definition snippets for pending steps
    source: true,       // <boolean> hide source uris
    profile: [],        // <string[]> (name) specify the profile to use
    strict: false,      // <boolean> fail if there are any undefined or pending steps
    tags: ['@LambdaDemo', '@ToDo', '@google'],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 60000,     // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    tagsInTitle: []
  },

  afterScenario: function (result) {
    if (result.passed === true) {
      driver.executeScript('lambda-status=passed');
    } else {
      driver.executeScript('lambda-status=failed');
    }
    // CLEAR LOCAL DATA AFTER TEST
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // before: function (capabilities, specs) {
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },

  /**
   * Runs before a Cucumber feature
   * @param {Object} feature feature details
   */
  // beforeFeature: function (feature) {
  // },
  /**
   * Runs before a Cucumber scenario
   * @param {Object} scenario scenario details
   */
  // beforeScenario: function (scenario) {
  // },
  /**
   * Runs before a Cucumber step
   * @param {Object} step step details
   */
  // beforeStep: function (step) {
  // },
  /**
   * Runs after a Cucumber step
   * @param {Object} stepResult step result
   */
  // afterStep: function (stepResult) {
  // },
  /**
   * Runs after a Cucumber scenario
   * @param {Object} scenario scenario details
   */
  // afterScenario: function (scenario) {
  // },
  /**
   * Runs after a Cucumber feature
   * @param {Object} feature feature details
   */
  // afterFeature: function (feature) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // }
}
