
'use strict';

const argv = require('yargs').argv;
const distTest = './.dist';


const config = {
    chromeOnly: true,
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },

    chromeDriver: './selenium/chromedriver_2.35.exe',
 //  seleniumAddress: 'http://localhost:4444/wd/hub',
    //baseUrl: 'http://g1gsn0bms057:18210/',
    allScriptsTimeout: 300000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        print: function() {},
        showColors: true,
        defaultTimeoutInterval: 500000
    },

};


if (argv.singleTest) {
    config.specs = [`${distTest}/**/${argv.singleTest}.js`];
} else if (argv.all) {
    config.specs = [`${distTest}/tests/**/*.js`];
} else {
    config.suites = suites;
}

exports.config = config;
