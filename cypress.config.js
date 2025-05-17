const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:55585",
    setupNodeEvents(on, config) {
      // event listeners aqui (se tiver)
    },
  },
});