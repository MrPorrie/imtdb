const {Given} = require('cucumber');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Given(/^Wait for Angular enabled is false$/, async () => {
	await browser.waitForAngularEnabled(false);
});

Given(/^Wait for Angular enabled is true/, async () => {
	await browser.waitForAngularEnabled(true);
});

Given(/^I navigate to the begin page$/, async () => {
	await browser.get(browser.baseUrl);
});

Given(/^I clean the browser$/, async () => {
	//browser.manage().deleteAllCookies();
	await browser.executeScript('window.localStorage.clear();');
	await browser.executeScript('window.sessionStorage.clear();');
});

Given(/^I navigate to the page: "([^"]*)"$/, async function(link) {
	await browser.get(link);
});

Given(/^I navigate to the login page$/, async () => {
	await browser.get(`${browser.baseUrl}login`);
});

Given(/^I close the browser$/, async () => {
	await browser.quit();
});

Given(/^I restart the browser$/, async () => {
	await browser.restart();
});

Given(/^I refresh the browser$/, async () => {
	return await browser.refresh();
	// await browser.waitForAngular();
});

Given(/^I navigate back$/, async () => {
	await browser.executeScript('window.history.go(-1)');
	await browser.waitForAngular();
});

Given(/^I'm redirected to the "([^"]*)" page/, async function(input) {
	const url = await browser.getCurrentUrl();
	await expect(url).to.include(input);
});

Given(/^the browser title is "([^"]*)"$/, async function(expectedTitle) {
	const actualTitle = await browser.getTitle();
	await expect(actualTitle).to.equal(expectedTitle);
});

Given(/^the browser has the correct url: "([^"]*)"$/, async (url) => {
	const startUrl = await browser.getCurrentUrl();
	expect(startUrl).to.equal(url);
});
