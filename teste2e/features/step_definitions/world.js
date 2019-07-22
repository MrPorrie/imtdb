/*
Page Object to keep the CSS selectors and common function within one file
 */

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

const EC = protractor.ExpectedConditions;

const World = {
	//	 :)
};

module.exports.World = World;
