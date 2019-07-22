/*
 Test new functions first out in this file before sorting it in another file
*/

const {Then} = require('cucumber');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const EC = protractor.ExpectedConditions;
const request = require('request');


