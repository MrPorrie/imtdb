const {When} = require('cucumber');

const testUser = browser.params.testUser;
const testPass = browser.params.testPass;

When(/^I fill in my crendentials - by arguments$/, async () => {
	await browser.driver.findElement(by.id('username')).sendKeys(testUser);
	await browser.driver.findElement(by.id('password')).sendKeys(testPass);
	await browser.driver.findElement(by.css('.login__submit')).click();
});

When(/^I fill in incorrect credentials$/, async () => {
	await element(by.id('username')).sendKeys('wronguser');
	await element(by.id('password')).sendKeys('wrong');
	await browser.driver.findElement(by.css('.login__submit')).click();
});
