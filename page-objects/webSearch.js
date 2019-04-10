"user strict";

// selenium-js version
// const webdriver = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');


// chrome.setDefaultService(new chrome.ServiceBuilder('/Users/skasulanati/Test/mac automation/WS-Framework-Test/3rdParty/chromedriver').build());

// let browser = new webdriver
//     .Builder()
//     .withCapabilities({
//         'browserName': 'chrome',
//         'chromeOptions': {
//             'debuggerAddress': '127.0.0.1:54213'
//         }
//     })
//     .build();

// async function webSearch() {
//     await browser.sleep(2000);
//     await browser.findElement({ className: 'menu-button' }).click();
//     await browser.sleep(3000);
// }

// protractor version
async function webSearch() {
    await browser.sleep(5000);
    await browser.findElement({ className: 'menu-button' }).click();
    await browser.sleep(2000);
}

module.exports = webSearch;