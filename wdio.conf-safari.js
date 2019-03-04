console.log('in wdio.conf-safari.js');
console.log(process.env.DEVICEFARM_DEVICE_NAME);
console.log(process.env.DEVICEFARM_DEVICE_PLATFORM_NAME);

exports.config = {
    specs: [
        './test/**/*.js'
    ],
    maxInstances: 10,
    path: '/',
    capabilities: [{
        automationName: 'XCUITest',
        deviceName:     process.env.DEVICEFARM_DEVICE_NAME,
        platformName:   process.env.DEVICEFARM_DEVICE_PLATFORM_NAME,
        browserName:    'Safari',          
        maxInstances:   10,
        // Add this option to prevent the anoying "Welcome"-message
        chromeOptions: {
          args: [ '--no-first-run' ],
        }
    }],
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    port: 4723,
    hostname: 'localhost',
    path: '/wd/hub',
    waitforTimeout: 120000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        timeout: 80000,
        ui: 'bdd'
    },
    plugins: {
        'wdio-screenshot': {}
    }
}