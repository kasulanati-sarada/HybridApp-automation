# WS-Framework Mac Test Automation

As what is planed, Mac Workstation will adapt the Chromiun Embedded Framework (CEF) to embed Chromiun web browsers as WebViews. This will enable test engineers to automate functionalities in Mac Workstation WebViews, as we can use Selenium WebDriver to manipulate elements easily. This is a prototype of WS Framework Team Mac Application-Level Test Infrastructure.


WS-Framework Mac test automation framework is built based on [AppiumMacDriver](https://github.com/appium/appium-for-mac), [Protractor](http://www.protractortest.org/#/) and [Cucumber](https://github.com/protractor-cucumber-framework) Behavior-Driven Development(BDD) Framework. Appium Mac Driver can control the native user interface of Mac applications using Selenium / WebDriver and the OS X Accessibility API. Protractor is built on top of [WebDriverJS]((https://www.npmjs.com/package/selenium-webdriver)) which can control web-application user actions. Cucumber focus more on features or stories than Unit Test, which will provide a higher-level view of what the suite is testing against for business-facing users.

## Installation & Quick Start

### installing  Appium Mac Driver

Please refer to the [Installation](https://github.com/appium/appium-for-mac) Section from Appium For Mac instruction

### Installing Package

Library Web end-to-end test automation framework is a package which includes all necessary node modules specified in the `package.json` to run Protractor test. You can install them by running:

```sh
npm install
```

### Installing Selenium WebDriver

In order to run the tests, it requires Selenium WebDriver. You can download the necessary binaries for Selenium Server and WebDriver by running: 

```sh
npm run update-webdriver
```

### Quick Start

You can run the example tests from command line with the pre-defined npm scripts:

Example:

```sh
npm run protractor-test
```

## Documentation




