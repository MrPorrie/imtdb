const {When} = require('cucumber');

function pause(numberMillis) {
	let now = new Date();
	const exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime) {
			return;
		}
	}
}

When(/^I wait for "([^"]*)" seconds/, async (input) => {
	const seconds = input * 1000;
	await pause(seconds);
});

When(/^I wait for "([^"]*)" minutes/, async (input) => {
	const minutes = input * 60000;
	await pause(minutes);
});
