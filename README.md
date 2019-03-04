# webdriverio-device-farm

Runs full page screenshot tests for chrome and safari devices using the AWS Device Farm cloud service.

## Setup

1) Clone this repository. git@github.com:gsb-public/webdriverio-device-farm.git
1) Run - npm install
1) Edit the test/index-spec.js to add your specific url.
1) Run - sh zipit.sh
1) Log into AWS and go to the Device Farm page. (https://us-west-2.console.aws.amazon.com/devicefarm) 
1) Create a project.
1) Click on the 'Create a new run' button
1) Name your run.
1) Choose 'Appium Node.js' in the 'Test' selector.
1) Upload the zip file you had created in a previous step.
1) Add the test-spec.yml, and uncomment the step for 'npm run test.chrome' or 'npm run test.safari'
1) Click on the 'Next step' button.
1) Choose a device from the device pool.
1) Click on the 'Next step' button.
1) Select an execution time of 8 minutes (seems to workout most of the time.)
1) Click on the 'Run test' button.

## Tested with the following devices

1) iPhone X 12
1) Google Pixel 3 XL
1) iPhone 7 11.0


