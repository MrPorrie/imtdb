@echo off 

::Workspace location
set dir=<dir>
::Results output location
set resultOutput=<dir>

::Postman collection
:: example "https://www.getpostman.com/collections/fd11b21b7a79499bb74d" or "testing.postman_collection.json"
set collection=<name>.postman_collection.json
::optional folder
set folder=<name>

::Variables
set enviroment=<name>_environment.json
set globals=<name>.postman_globals.json

::Iteration data file
set dataFile=TestsAdresses2.csv
::Iteration count
set iterationCount=28

::Delay inbetween quests in ms
set delayRequest=5


::---------------------------------------------


echo collection: %collection% and folder if specified: %folder%
echo Iteration count: %iterationCount%
echo Delay request: %delayRequest%
echo Run command:

cd %dir%

:: optional commands:

::,json,junit
::--reporter-json-export %resultOutput% 
::--reporter-junit-export %resultOutput%
::--reporter-cli-export %resultOutput%
::> console_log.txt

call newman run %collection% --folder %folder% -e %enviroment% -g %globals% -d %dataFile% -r cli -n %iterationCount% --delay-request %delayRequest%

pause

