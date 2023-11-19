# Playwright Test with Cucumber README

## Installation Steps

1. **Install VSCode Extension: Playwright Test for VSCode & Cucumber**
   - Ensure you have the "Playwright Test for VSCode & Cucumber" extension installed in Visual Studio Code.

2. **Install Dependencies**
   - Open a terminal and run the following commands to install necessary dependencies:
     ```bash
     npm i @cucumber/cucumber -D
     npm i ts-node -D
     npm install multiple-cucumber-html-reporter --save-dev
     npm i fs-extra
     ```

3. **Install Playwright**
   - Press `Ctrl + Shift + P` in VSCode, type "Install Playwright" and select the option to install Playwright.

## Project Structure
project-root
│
├── (tests)
├── (tests-examples)
├── (playwright.config.ts)
├── cucumber.json
├── src
│   ├── test
│   │   ├── features       // store feature files
│   │   ├── steps          // store step definition files
│   ├── hooks              // store before & after hooks
│   │   ├── hooks.ts
│   │   ├── Fixture.ts
│   ├── helper
│       ├── report.ts
│       ├── browserManager.ts // launch different browser by case


## VSCode Settings

4. **Configure Cucumber Settings in VSCode**
   - Navigate to File > Preference > Settings.
   - Search for "cucumber" and edit `setting.json`:
     ```json
     "cucumber.features": [
         "src/test/features/*.feature"
     ],
     "cucumber.glue": [
         "src/test/steps/*.ts"
     ]
     ```

## NPM Scripts

5. **Update package.json Scripts**
   - Add the following scripts to your `package.json` file:
     ```json
     "scripts": {
         "test": "cucumber-js test || true",
         "test:failed": "cucumber-js -p rerun @rerun.txt || true",
         "posttest": "npx ts-node src/helper/report.ts"
     }
     ```

Now your Playwright Test project is set up and ready to run. Use the provided scripts to execute tests and generate reports. 
