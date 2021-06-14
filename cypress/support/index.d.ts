/* eslint-disable */

declare namespace Cypress {
  interface Chainable {
    signIn(email: string, password: string): Cypress.Chainable<void>
  }
}
