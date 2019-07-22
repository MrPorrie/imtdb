(function() {
	'use strict';

	module.exports = function(grunt) {
		// define settings
		const settings = {
			dir: {
				dist: 'dist/'
			}
		};

		// autoload all grunt plugins mentioned in devDependencies package.json
		require('load-grunt-tasks')(grunt);

		grunt.config.init(settings);

		// load task configurations
		const configs = require('load-grunt-configs')(grunt, {
			config: {
				src: 'grunt/grunt-tasks/configs/*.js'
			}
		});
		grunt.config.merge(configs);

		// load task definitions
		grunt.loadTasks('grunt/grunt-tasks');
	};
}());
