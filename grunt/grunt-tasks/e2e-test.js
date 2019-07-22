module.exports = function(grunt) {
	'use strict';

	// let running = browser.params.runs;

	grunt.registerTask(
		'prepareReport',
		'prepare the reporting area', [
			'clean:e2e',
			'copy:protractorIndex'
		]
	);

	grunt.registerTask(
		'e2e-test',
		'run e2e tests', [
			'installSelenium',
			'prepareReport',
			'protractor:multi'
		]
	);

	grunt.registerTask(
		'e2e-test-local', 'run e2e tests no ie', [
			'installSelenium',
			'prepareReport',
			'protractor:local'
			// 'protractor:multi'
		]
	);

	grunt.registerTask(
		'e2e-test-local-multipleRun', 'run e2e tests no ie', [
			'installSelenium',
			'prepareReport',
			'multipleRun'
		]
	);

	grunt.registerTask(
		'e2e-test-local-multipleRun-local', 'run e2e tests no ie', [
			'installSelenium',
			'prepareReport',
			'multipleRun-local'
		]
	);
	grunt.registerTask(
		'multipleRun-local',
		function() {
			const n = 100;
			for (let i = 0; i < n; i++) {
				// grunt.task.run('protractor:local');
				grunt.task.run('protractor:multi');
			}
		}
	);
	grunt.registerTask(
		'multipleRun-local',
		function() {
			const n = 100;
			for (let i = 0; i < n; i++) {
				grunt.task.run('protractor:local');
			}
		}
	);

	// TODO: onderstaande is misschien niet meer nodig door in protractor runner de juiste install optie op true te zetten.
	grunt.registerTask(
		'installSelenium',
		'installs Selenium',
		function() {
			const shell = require('shelljs');
			let oldnodeWebdriveLocation = '.\\node_modules\\grunt-protractor-runner\\node_modules\\protractor\\bin\\webdriver-manager',
				webdriveLocation = '.\\node_modules\\protractor\\bin\\webdriver-manager',
			    command = ' --ie32 update';
			if (process.platform !== 'win32') {
				oldnodeWebdriveLocation = './node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager';
				webdriveLocation = './node_modules/protractor/bin/webdriver-manager';
				command = ' update';
			}
			if (shell.test('-e', oldnodeWebdriveLocation)) {
				webdriveLocation = oldnodeWebdriveLocation;
			}
			shell.exec(`node ${webdriveLocation}${command}`);
			// shell.exec('node ' + webdriveLocation + command + ' --versions.chrome 75.0.3770.90');
		}
	);
};
