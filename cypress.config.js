const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // Implement any additional node event listeners here
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    ignoreVideos: false,
  },
  screenshotOnRunFailure: true,
  video: true,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  viewportWidth: 1440,
  viewportHeight: 900,
});
