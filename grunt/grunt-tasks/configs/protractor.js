module.exports = function(grunt) {
	'use strict';

	const args = {
			baseUrl: grunt.option('baseUrl'),
			params: {
				testUser: grunt.option('testUser'),
				testPass: grunt.option('testPass'),
			}
		},
		tags = grunt.option('tags'),
		noie = grunt.option('noie');

	if (tags) {
		console.log('Adding tags: ' + tags);
		// for example as: grunt e2e-test --tags=~@ignore --tags=@multi
		args.cucumberOpts = {tags: tags};
	}

	if (noie) {
		console.log('removing IE from the list of browsers');
		args.multiCapabilities = [{browserName: 'chrome'}, {browserName: 'firefox'}];
	}

	return {
		options: {
			keepAlive: false, // If false, the grunt process stops when the test fails.
			noColor: false, // If true, protractor will not use colors in its output.
			// webdriverManagerUpdate: true,
			args: args
		},
		local: {
			configFile: 'teste2e/conf/conf-local.js'
		}
	};
};
