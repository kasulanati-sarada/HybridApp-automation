//protractor.conf.js
let startWorkstation = require('./nativeActions/startWorkstation.js');
let workstationSearch = require('./nativeActions/workstationSearch.js');
let sessionID = '';

exports.config = {
  // directConnect: true,
  directConnect: true,
  chromeDriver: "3rdParty/chromedriver",

  capabilities:
  {
    'browserName': 'chrome',
    'chromeOptions': {
      'debuggerAddress': '127.0.0.1:54213' // find: why do we specify this
    }
  },

  SELENIUM_PROMISE_MANAGER: false,

  getPageTimeout: 60000,
  allScriptsTimeout: 500000,

  // for protractor-cucumber
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  params: {
    nativeSessionID: ''
  },

  cucumberOpts: {
    require: 'features/step_definitions/*.js',
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  },

  beforeLaunch: async () => {
    sessionID = await startWorkstation();
  },

  onPrepare: async () => {
    browser.params.nativeSessionID = sessionID;
    browser.waitForAngularEnabled(false);

    // var browserCapabilities = await browser.getCapabilities();
    // browser.params.browserName = browserCapabilities.get('browserName');
    /** 
    *   ProtractorExpectedConditions. 
    *   Represents a library of canned expected conditions that are useful for protractor, especially when dealing with non-angular apps.
    *   Each condition returns a function that evaluates to a promise
    * http://www.protractortest.org/#/api?view=ProtractorExpectedConditions
    */
    global.EC = protractor.ExpectedConditions;

    /**
     *  Timeout for actions and ratio
     *  when running on npmDev mode, timeout needs to be increased. 
     *  All timeouts refer to three options
     *  npmMode: "none", , dev , devBIWeb
     * 
     * jasmineNodeOpts.defaultTimeoutInterval is not reachable, thus you need to copy the value
    */
    browser.params.timeoutRatio = 1;
    browser.params.timeoutRatio.waitDefaultTimeout = (5 * 1000);

    /**
    *   Default timeout for cucumber steps.
    *   https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/timeouts.md
    *    While debugging, increase to 120 seconds
    */
    browser.params.stepTimeoutOffset = 60 * 1000; // Timetout at 60 seconds
    browser.params.cucumberStepMaxTimeout = (3 * 60 * 1000); // 3 minutos (Consider debugging)

    var { setDefaultTimeout } = require('cucumber');
    setDefaultTimeout(browser.params.stepTimeoutOffset);// 6 seconds * 1k miliseconds

    // let handles = await browser.getAllWindowHandles();
    // console.log(await browser.getTitle());
    // console.log(handles);
    // await browser.switchTo().window(handles[1]);
    // await browser.sleep(2000);
    // console.log(await browser.getTitle());
  },
};