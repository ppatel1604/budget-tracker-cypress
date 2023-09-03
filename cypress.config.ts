import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    env_url: "http://localhost:8080",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
