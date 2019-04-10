
"user strict";

let wd = require('wd');
let closeButtonPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments' and @AXSubrole='AXStandardWindow']/AXButton[@AXSubrole='AXCloseButton']";


async function quitWorkstation(sessionID) {

    try {
        console.log(`3: attached to ${sessionID}`);
        let workstationApp = await wd.promiseChainRemote('http://localhost:4723/wd/hub');
        await workstationApp.attach(sessionID);
        let closeButton = await workstationApp.elementByXPath(closeButtonPath);
        await closeButton.click();
        await workstationApp.sleep(2000);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = quitWorkstation;

