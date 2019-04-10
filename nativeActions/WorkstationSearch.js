"user strict";
var wd = require('wd'); 

let searchBoxPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXSubrole='AXSearchField']";

async function WorkstationSearch(sessionID, searchString) {
    try {
        console.log(`1: attached to ${sessionID}`);
        let workstationApp = await wd.promiseChainRemote('http://localhost:4723/wd/hub');
        await workstationApp.attach(sessionID);
        let searchBox = await workstationApp.elementByXPath(searchBoxPath);
        await searchBox.moveTo();
        await workstationApp.sleep(1000);
        await workstationApp.buttonDown();
        await workstationApp.sleep(1000);
        await workstationApp.buttonUp();
        await workstationApp.sleep(1000);
        // await searchBox.sendKeys(searchString);
        // await workstationApp.sleep(1000);
        await searchBox.sendKeys(searchString); 
        await workstationApp.sleep(3000);
    } catch (err) {
        console.log(err);
        return false;
    }

}

module.exports = WorkstationSearch;