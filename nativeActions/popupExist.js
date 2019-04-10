
"user strict";
var wd = require('wd'); 

let popupPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments' and @AXSubrole='AXStandardWindow']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXValue='MicroStrategy' and @AXSubrole='AXSearchField']/AXPopover[0]";

async function popupExist(sessionID) {
    try {
        console.log(`2: attached to ${sessionID}`);
        let workstationApp = await wd.promiseChainRemote('http://localhost:4723/wd/hub');
        await workstationApp.attach(sessionID);
        await workstationApp.sleep(2000);
        let popup = workstationApp.elementByXPath(popupPath);
        return popup.isDisplayed();
        // return await workstationApp.hasElementByXPath(popupPath);
    } catch (err) {
        console.log(err);
        return false;
    }

}

module.exports = popupExist;