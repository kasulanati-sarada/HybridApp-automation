"user strict";
var wd = require('wd');

async function startWorkstation() {

    try {
        let workstationApp = await wd.promiseChainRemote('http://localhost:4723/wd/hub');
        await workstationApp.init({
            platformName: 'Mac',
            deviceName: 'Mac',
            app: '⁨/Applications/MicroStrategy\ Workstation.app',
            newCommandTimeout: 100000
        })

        workstationApp.sleep(2000);
        let sessionID = await workstationApp.getSessionId();
        console.log(`session id: ${sessionID}`);
        return sessionID;
    } catch (err) {
        console.log(err);
        return false;
    }

}

module.exports = startWorkstation;