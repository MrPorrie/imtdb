const {Then} = require('cucumber');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const EC = protractor.ExpectedConditions;

Then(/^The element with id "([^"]*)" is present$/, async (elementId) => {
	await expect(element(by.id(elementId)).isDisplayed(), `Element with id "${elementId}" is not present`).eventually.to.be.true;
	// await expect(element(by.id(elementId)).isDisplayed().eventually.to.be.true);
});

Then(/^The element with the css "([^"]*)" becomes visible$/, async function(classString) {
	const elem = element(by.css(classString));
	await browser.wait(EC.presenceOf(elem), 30000);
});

Then(/^The "([^"]*)" element is present$/, async function(cssSelector) {
	const elem = element(by.css(cssSelector));
	await browser.wait(EC.presenceOf(elem), 30000);
});

Then(/^The "([^"]*)" element is present and order "([^"]*)"$/, async function(cssSelector, order) {
	const elem = element.all(by.css(cssSelector)).get(parseInt(order));
	return EC.presenceOf(elem);
});

Then(/^The element "([^"]*)" is displayed$/, async function(input) {
	const elem = $(input);
	await browser.wait(EC.presenceOf(elem), 30000);
});

Then(/^The number of elements "([^"]*)" from the element "([^"]*)" are shown$/, async function(number, cssSelector) {
	const spans = element.all(by.css(cssSelector));
	const res = await spans.count();
	expect(res).to.equal(number);
});

Then(/^I expect the element "([^"]*)" containing the "([^"]*)" text to not be displayed$/, function(selector, taskname) {
	const seconds = 30;
	const waitingTime = parseInt(seconds) * 1000;
	const taskelement = element(by.cssContainingText(selector, taskname));
	return browser.wait(EC.stalenessOf(taskelement), waitingTime);
});

Then(/^The element with id "([^"]*)" is not present$/, async function(elementId) {
	const present = await element(by.id(elementId)).isPresent();
	if (!present) {
		await expect(present, `Element with id "${elementId}" should not be present`).to.be.false;
	} else {
		const displayed = await element(by.id(elementId)).isDisplayed();
		await expect(displayed, `Element with id "${elementId}" should not be displayed`).to.be.false;
	}
});

Then(/^The element with selector "([^"]*)" is not present$/, async function(elementId) {
	const present = await element(by.css(elementId)).isPresent();
	if (!present) {
		await expect(present, `Element with id "${elementId}" should not be present`).to.be.false;
	} else {
		const displayed = await element(by.id(elementId)).isDisplayed();
		await expect(displayed, `Element with id "${elementId}" should not be displayed`).to.be.false;
	}
});

Then(/^The notification "(.*)" from the element "([^"]*)" is shown (\d*) time$/, async (text, cssSelector, times) => {
	const spans = element.all(by.cssContainingText(cssSelector, text));
	const count = await spans.count();
	await expect(count).to.equal(parseInt(times));
});

Then(/^The element with the "([^"]*)" style contains the following text "([^"]*)"$/, async function(selector, expectedText) {
	const elem = element(by.css(selector));
	const text = await elem.getAttribute('textContent');
	await expect(expectedText).to.equal(text);
	// await EC.textToBePresentInElement(actualTextPromise, expectedText);  TODO# Doesn't work correctly?? Needs to be checked
});

Then(/^The "([^"]*)" text is Equal to the text in the element with css "([^"]*)" and order "([^"]*)"$/, async function(value, input, order) {
	const elem = element.all(by.css(input)).get(parseInt(order));
	const text = await elem.getAttribute('textContent');
	if (text !== '') {
		await expect(text).to.equal(value);
	} else {
		const text = await elem.getAttribute('value');
		await expect(text).to.equal(value);
	}
});

Then(/^The "([^"]*)" text has to contain the text in the element with css "([^"]*)" and order "([^"]*)"$/, async function(value, input, order) {
	const elem = element.all(by.css(input)).get(parseInt(order));
	const text = await elem.getAttribute('textContent');
	if (text !== '') {
		await expect(text).to.contain(value);
	} else {
		const text = await elem.getAttribute('value');
		await expect(text).to.contain(value);
	}
});

Then(/^The "([^"]*)" field is empty$/, async function(cssSelector) {
	const elem = element(by.css(cssSelector));
	const actualText = await elem.getText();
	await expect(actualText).to.equal('');
	await expect(actualText).to.be.empty();
});
