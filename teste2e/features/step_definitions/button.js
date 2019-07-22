const {Then} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

// const EC = protractor.ExpectedConditions;

Then(/^I click the button with id "([^"]*)"$/, async (buttonId) => {
	const elem = element(by.id(buttonId));
	browser.executeScript('arguments[0].scrollIntoView();', elem.getWebElement());
	await elem.click();
});

Then(/^I click the button with text "([^"]*)"$/, async (buttonId) => {
	const elem = element(by.buttonText(buttonId));
	await elem.click();
});

Then(/^The "([^"]*)" button is disabled$/, async (selector) => {
	const elem = element.all(by.css(selector)).first();
	browser.executeScript('arguments[0].scrollIntoView();', elem.getWebElement());
	const status = await elem.isEnabled();
	await expect(status).to.equal(false);
});

Then(/^The "([^"]*)" button is enabled/, async (selector) => {
	const elem = element.all(by.css(selector)).first();
	browser.executeScript('arguments[0].scrollIntoView();', elem.getWebElement());
	const status = await elem.isEnabled();
	await expect(status).to.equal(true);
});

Then(/^The cancel button is disabled$/, async () => {
	const elem = element.all(by.css('.sw-btn.cancel')).first();
	browser.executeScript('arguments[0].scrollIntoView();', elem.getWebElement());
	const status = await elem.isEnabled();
	await expect(status).to.equal(false);
});

Then(/^The save button is disabled$/, async () => {
	const elem = element.all(by.css('.sw-btn.sw-btn-save')).first();
	browser.executeScript('arguments[0].scrollIntoView();', elem.getWebElement());
	const status = await elem.isEnabled();
	await expect(status).to.equal(false);
});

Then(/^The cancel button is enabled/, async () => {
	const elem = element.all(by.css('.sw-btn.cancel')).first();
	browser.executeScript('arguments[0].scrollIntoView();', elem.getWebElement());
	const status = await elem.isEnabled();
	await expect(status).to.equal(true);
});

Then(/^The save button is enabled/, async () => {
	const elem = element.all(by.css('.sw-btn.sw-btn-save')).first();
	browser.executeScript('arguments[0].scrollIntoView();', elem.getWebElement());
	const status = await elem.isEnabled();
	await expect(status).to.equal(true);
});

Then(/^The "([^"]*)" element with the index "([^"]*)" is disabled$/, async (selector, order) => {
	const elem = element.all(by.css(selector)).get(order);
	const status = await elem.isEnabled();
	await expect(status).to.equal(false);
});

Then(/^The "([^"]*)" element with the index "([^"]*)" is enabled/, async (selector, order) => {
	const elem = element.all(by.css(selector)).get(order);
	const status = await elem.isEnabled();
	await expect(status).to.equal(true);
});

Then(/^I click the "([^"]*)" selector$/, async (selector) => {
	const elem = $(selector);
	await elem.click();
});

Then(/^I click the css "([^"]*)" containing "([^"]*)"$/, async function(css, text) {
	const elem = element(by.cssContainingText(css, text));
	browser.executeScript('arguments[0].scrollIntoView({block: "end"});', elem.getWebElement());
	await elem.click();
});

Then(/^I click the "([^"]*)" selector if it is displayed on the screen$/, async function(selector) {
	const elem = $(selector);
	if (elem.isPresent()) {
		browser.executeScript('arguments[0].scrollIntoView({block: "end"});', elem.getWebElement());
		await elem.click();
	}
});

Then(/^I hover above the "([^"]*)" selector$/, async function(selector) {
	const elem = $(selector);
	browser.executeScript('arguments[0].scrollIntoView({block: "end"});', elem.getWebElement());
	await  browser.actions().mouseMove(elem).perform();
});

Then(/^I click the selector "([^"]*)" and order "([^"]*)"/, async (selector, number) => {
	await element.all(selector).get(number).click();

});

Then(/^click on the element "([^"]*)" with the text "([^"]*)" and order "([^"]*)"$/, async function(css, text, order) {
	const spans = element.all(by.cssContainingText(css, text));
	await spans.get(order).click();
});

Then(/^I click the "([^"]*)" selector on the "([^"]*)" position$/, async (selector, number) => {
	if (number === 'first') {
		await browser.executeScript('arguments[0].scrollIntoView({block: "end"});', $$(selector).first().getWebElement());
		await $$(selector).first().click();
	} else if (number === 'last') {
		await browser.executeScript('arguments[0].scrollIntoView({block: "end"});', $$(selector).last().getWebElement());
		await $$(selector).last().click();
	} else {
		await browser.executeScript('arguments[0].scrollIntoView(false);', $$(selector).get(number).getWebElement());
		await $$(selector).get(number).click();
	}
});
