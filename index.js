"user strict";
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var wd = require('wd'); 

chaiAsPromised.transferPromiseness = wd.transferPromiseness;
var Q = wd.Q;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const startWorkstation = async () => {


    // Attach to desktop

    try {
        let workstationApp = await wd.promiseChainRemote('http://localhost:4723/wd/hub');
        await workstationApp.init({
            platformName: 'Mac',
            deviceName: 'Mac',
            app: '/Users/qfan/bin/MicroStrategy Workstation.app'        
        })

        workstationApp.sleep(2000);

        let sessionID = await workstationApp.getSessionId();
        console.log(`session id: ${sessionID}`);

        // let searchBoxPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments' and @AXSubrole='AXStandardWindow']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXSubrole='AXSearchField']";
        let searchBoxPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXSubrole='AXSearchField']";
        // let popupPath = "/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments' and @AXSubrole='AXStandardWindow']/AXToolbar[0]/AXGroup[4]/AXTextField[@AXValue='Team' and @AXSubrole='AXSearchField']/AXPopover[0]/AXScrollArea[0]/AXTable[0]/AXRow[@AXSubrole='AXTableRow']/AXCell[0]/AXStaticText[@AXValue='TeamBirths']";
        

        let searchBox = await workstationApp.elementByXPath(searchBoxPath);
        await searchBox.sendKeys('a');
        await workstationApp.sleep(2000);
        await searchBox.sendKeys('MSTR');

        // try for local search
        // // let dossierToBeClicked = await workstationApp.elementByXPath("/AXApplication[@AXTitle='MicroStrategy Workstation']/AXWindow[@AXTitle='MicroStrategy Workstation - Environments' and @AXSubrole='AXStandardWindow']/AXSplitGroup[0]");
        // let dossierToBeClicked = await workstationApp.elementByXPath(popupPath);
        // await dossierToBeClicked.moveTo();
        // await workstationApp.buttonDown();
        // await workstationApp.buttonUp();

        await sleep(2 * 1000);

        process.exit();

    } catch (err) {
        console.log(err);
    }

    process.exit(1);

}

startWorkstation();