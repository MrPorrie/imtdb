exports.config = {
	onPrepare() {
		'use strict';

		// browser.manage().window().setSize(1680, 1050);

		// Add properties of browser to the browser object
		browser.getCapabilities().then(function(capabilities) {
			browser.browserPlatform = capabilities.get('platform');
			browser.browserName = capabilities.get('browserName');
			browser.browserVersion = capabilities.get('version');
		});
	},

	framework: 'custom',
	// path relative to the current config file
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	cucumberOpts: {
		tags: [
			'~@ignore'
		],
		strict: false,
		'dry-run': false,
		'no-colors': true,
		// verbose: true,
		// capture: true,
		// logcapture: true,
		compiler: [],
		require: ['../features/support/*.js', '../features/step_definitions/*.js', '../features/step_definitions/step_definitions1/*.js'],
		format: ['json:dist/teste2e/reportNew/results.json', 'node_modules/cucumber-pretty'],
		// format: ['progress', 'pretty:output.txt'],
		'format-options': '{ "colorsEnabled": true }'

		// format: 'pretty'
		// 'no-colors': false
	},

	plugins: [{
		package: 'protractor-multiple-cucumber-html-reporter-plugin',
		options: {
			automaticallyGenerateReport: true,
			removeExistingJsonReportFile: true,
			displayDuration: true,
		}
	}],

	specs:	['../features/imtdb/'],
	exclude: ['../features/Example/'],

	getPageTimeout: 70000,
	setDefaultTimeout: 70000,
	allScriptsTimeout: 300000,
	directConnect: false,
	ENABLE_CONTROL_FLOW: false
};
