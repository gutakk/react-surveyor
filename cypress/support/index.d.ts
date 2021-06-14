/* eslint-disable */

declare namespace Cypress {
  interface Chainable {
    mockSignInResponse(statusCode: number, fixture: string): Cypress.Chainable<void>
    signIn(email: string, password: string): Cypress.Chainable<void>
  }
}
