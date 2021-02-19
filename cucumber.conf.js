const { setDefaultTimeout, AfterAll, BeforeAll ,After} = require('@cucumber/cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');
// const reporter = require('cucumber-html-reporter');


setDefaultTimeout(600000);

BeforeAll(async () => {
   await startWebDriver();
   await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
});

// After(function() {
//     getNewScreenshots().forEach(file => this.attach(fs.readFileSync(file), 'image/png'));
//  });