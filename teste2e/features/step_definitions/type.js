const {When} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const EC = protractor.ExpectedConditions;

When(/^I type "([^"]*)" in the "([^"]*)" field$/, async function(text, fieldId) {
	const elem = element(by.id(fieldId));
	await elem.click().sendKeys(text);
});

When(/^I type "([^"]*)" in the field with the selector "([^"]*)" and position "([^"]*)"$/, async function(text, fieldId, position) {
	const elem = $$(fieldId).get(position);
	browser.executeScript('arguments[0].scrollIntoView();', elem.getWebElement());
	await elem.click();
	await elem.sendKeys(text);
});

When(/^I type "([^"]*)" in the field with the selector "([^"]*)"$/, async function(text, fieldId) {
	browser.executeScript('arguments[0].scrollIntoView();', $(fieldId).getWebElement());
	await $(fieldId).click();
	await $(fieldId).sendKeys(text);
});

When(/^I type a random string of "([^"]*)" length in the text area$/, function(length) {
	const elem = $$('#ims > div.wrapper > ui-view > div > div.main-wrapper.pull-right.main-wrapper-large > div > sw-tab-set > div:nth-child(2) > div.ng-scope.tabcontent > sw-tab > sw-form > div > div:nth-child(1) > ng-include > sw-responder-form > sw-form-wrapper > form > ng-transclude > div > sw-responder-wrapper > div.row.responders__container > div > div > div > ng-transclude > div.col-xs-12.col-sm-5.col-md-5.col-lg-6.column-right.ng-scope > div:nth-child(2) > div > sw-textarea > div > div > textarea').get(0);
	const len = parseInt(length);
	function randomString(length) {
		let text = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,';
		for (let i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}
	const testString = randomString(len);
	console.log(randomString());
	// browser.executeScript('arguments[0].scrollIntoView();', elem.getWebElement());
	return elem.click().sendKeys(testString);
});


When(/^I type a random string of "([^"]*)" length in the field with the selector "([^"]*)" and position "([^"]*)"$/, function(length, fieldId, position) {
	const elem = $$(fieldId).get(position);
	const len = parseInt(length);
	function randomString(length) {
		let text = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}
	const testString = randomString(len);
	console.log(randomString());
	browser.executeScript('arguments[0].scrollIntoView();', elem.getWebElement());
	return elem.click().sendKeys(testString);
});
