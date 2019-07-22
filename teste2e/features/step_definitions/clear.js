const {When} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;


When(/^I clear the field "([^"]*)"/, async function(inputField) {
	let elem = element(by.id(inputField));
	browser.executeScript("arguments[0].scrollIntoView();", elem.getWebElement());
	await elem.click().clear();
	const content = await elem.getText();
	await expect(content).to.be.empty;
});

When(/^I clear the field with the "([^"]*)" selector/, async function (inputField) {
	let elem = element(by.css(inputField));
	browser.executeScript("arguments[0].scrollIntoView();", elem.getWebElement());
	await elem.click().clear();
	const content = await elem.getText();
	await expect(content).to.be.empty;
});

When(/^I clear the field with the "([^"]*)" css selector and position "([^"]*)"/, async function(inputField, position) {
	let elem = element.all(by.css(inputField)).get(position);
	browser.executeScript("arguments[0].scrollIntoView();", elem.getWebElement());
	await elem.click().clear();
	const content = await elem.getText();
	await expect(content).to.be.empty;
});
