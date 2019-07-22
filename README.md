## Prerequisites

Protractor is a Node.js program built on top of WebDriverJS, which uses native events and browser-specific drivers to interact with your application as a user would.
To use protractor, you will need to have Node.js installed.
You will also need to download the Protractor package by using npm, which comes with Node.js.
  
Check the version of Node.js you have by running node --version.
Then, check the compatibility notes in the Protractor README to make sure your version of Node.js is compatible with Protractor.
By default, Protractor uses the Jasmine test framework for its testing interface.
  
In this project cucumber is set with a local standalone Selenium Server to control browsers.
You will need to have the Java Development Kit (JDK)installed to run the standalone Selenium Server. Check this by running java -version from the command line.

Van <https://www.protractortest.org/#/tutorial> 


## Installing Protractor

Use npm to install Protractor globally (omit the -g if you’d prefer not to install globally):
```
npm install -g protractor
```
Check that Protractor is working by running protractor --version.
The Protractor install includes the following:
	• protractor command line tool
	• webdriver-manager command line tool
	• Protractor API (library)

Van <https://www.protractortest.org/#/protractor-setup> 


## Installation

Create a new map (For example e2etest).

Run CMD inside the new map:
```
$ npm install --save-dev webdriver-manager protractor cucumber protractor-cucumber-framework
```
This installs the packages:  
	- webdriver-manager  
	- Protractor  
	- Cucumber  
	- protractor-cucumber-framework  
	
Also install chai and chai-as-promised:
```	
$ npm install chai
$ npm chai-as-promised
```


## File layout

It's always useful to have a clear file layout.
A standard layout is made in the map "teste2e":  
	- features  
	- page objects  
	- Step definitions  

The map "node_modules" should already be visible after installing al the modules.
Also the package.json should already be generated.


## Run e2e

First always update the webdriver manager and then start it:
```
webdriver-manager update && webdriver-manager start
```
$ Run in another CMD protractor:
```
protractor <path to the configuration file>
```  
Or, if you are already in the correct map then you can just run the command:
```
$ protractor conf.js
```	


## Grunt
.... in progress .... The JavaScript Task Runner, run tests with a single command.  
This project can run with Grunt.


## Output

Note! above cucumber version 1.3.1 the output format has changed.
If you would like to have the same output just like in the old version you can install the npm package:
```
cucumber-pretty
```	

The output should look like this:
```
Scenario: Button Click
✔ Given I view the homepage
✔ When I click on the Start button
✔ Then I should see a message telling me that the button was clicked

1 scenario (1 passed)
3 steps (3 passed)
0m00.709s
```

```
## Multiple cucumber report
.... in progress ....


## API test

The postman collection with the enviroment variables can be found in the map "testAPI"
