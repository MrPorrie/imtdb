const f = require('./conf-common');

f.config.capabilities = {
	browserName: 'chrome',
	chromeOptions: {
		// args: ['--start-maximized'] // THIS!
		args: ['--headless", "--disable-gpu", "--window-size=800,600']
	}
};

exports.config = f.config;
