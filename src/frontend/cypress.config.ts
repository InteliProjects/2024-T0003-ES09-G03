import { defineConfig } from 'cypress'
import codeCoverageTask from '@cypress/code-coverage/task'

export default defineConfig({
  e2e: {
    specPattern: './cypress/e2e/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // add code coverage task
      codeCoverageTask(on, config)
      // return the updated config
      return config
    },
  },
  includeShadowDom: true,
})
