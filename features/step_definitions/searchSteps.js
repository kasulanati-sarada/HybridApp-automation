var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

let startWorkstation = require('../../nativeActions/startWorkstation.js');
let WorkstationSearch = require('../../nativeActions/WorkstationSearch.js');
let quitWorkstation = require('../../nativeActions/quitWorkstation.js');
let popupExist = require('../../nativeActions/popupExist.js');
let webSearch = require('../../page-objects/webSearch.js');


let sessionID = browser.params.nativeSessionID;
let sessionID = '';

var { Given, When, Then } = require('cucumber');

Given('I launched Workstation', { timeout: 100000 }, async function () {
    sessionID = await startWorkstation();
});

When('I search for {string}', { timeout: 100000 }, async function (searchString) {
    await WorkstationSearch(sessionID, searchString);
});

Then('Result Popup should be displayed', { timeout: 100000 }, async function () {
    await expect(popupExist(sessionID)).become(true);
});

Then('I expand menu inside the popup', { timeout: 100000 }, async function () {
    await webSearch();
    let menuItems = await element.all(by.className('top-link')).get(0).getText();
    expect(menuItems).to.equal('Product');
});

Then('I quit Workstation', async function () {
    await quitWorkstation(sessionID);
});

