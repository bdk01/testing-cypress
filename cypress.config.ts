import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     /*  allureWriter(on,config)
      return config */
    },
    specPattern:"./cypress/tests/*/*",
    baseUrl:"https://demoblaze.com/"
    
  },
  reporter: 'mochawesome',
  defaultCommandTimeout:10000
});
