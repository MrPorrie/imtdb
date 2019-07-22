/*
this file is for request that mix with the e2e, see some examples below.
 */

const {Given} = require('cucumber');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const request = require('request');


// When(/^Request: I post the "([^"]*)" IEP with the following value: "([^"]*)"/, function(iepname, value) {
// 	const jsonDataObj = [{
// 		name: iepname,
// 		categoryType: 0,
// 		value,
// 		incidentid: global.testIncidentId,
// 		category: 'IEP'
// 	}];
// 	// let request = require('request'),		// staat al gedifineerd hierboven
// 	const options = {',
// 		uri: '...',
// 		headers: {
// 			'content-type': 'application/json',
// 			token: global.loginToken
// 		},
// 		method: 'POST',
// 		json: jsonDataObj
// 	};
// 	return request(options, function(error, response) {
// 		// console.log(options);
// 		return expect(response.statusCode).to.equal(200);
// 	});
// });
//
// When(/^request: I DELETE the current incident"/, function() {
// 	const id = 666;
//
// 	const options = {
// 		uri: `...{id}`,
// 		headers: {
// 			'content-type': 'application/json',
// 			Authorization: 'Basic ...',
// 			token: '...'
// 		},
// 		method: 'DELETE',
// 		// json:jsonDataObj
// 	};
// 	return request(options, function(error, response) {
// 		console.log(options);
// 		return expect(response.statusCode).to.equal(200);
// 	});
