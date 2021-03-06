exports.config = {
    framework: 'mocha',

    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://angularjs.org',

    specs: [
        '../.././spec.js'
    ],

    snappit: {
        screenshotsDirectory: './screenshots',
        threshold: 5,
        defaultResolutions: [[1366, 768]],
        cicd: {
            githubTokenEnvironmentVariable: 'ghEnterpriseToken',
            serviceAccount: {
                userName: 'rt-inova-encoresvc',
                teamId: 1569
            },
            screenshotsRepo: 'https://github.rackspace.com/EncoreScreenshots/snappit-mocha-protractor-screenshots',
            projectRepo: 'https://github.rackspace.com/EncoreScreenshots/snappit-mocha-protractor'
        }
    },

    onPrepare: function () {
        var chai = require('chai').use(require('chai-as-promised'));
        chai.config.truncateThreshold = 0;
        expect = chai.expect;
        browser.driver.manage().window().setSize(1366, 768); // laptop
        screenshot = require('../../../index');
    },

    capabilities: {
        browserName: 'firefox'
    },

    mochaOpts: {
        enableTimeouts: false,
        reporter: 'spec',
        slow: 3000,
        ui: 'bdd'
    }
};
