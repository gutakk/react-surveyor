declare namespace Cypress {
  interface Chainable {
    mockSignInResponse(statusCode: number, fixture: string): Cypress.Chainable<void>
    signIn(email: string, password: string): Cypress.Chainable<void>
    
    mockForgotPasswordResponse(statusCode: number): Cypress.Chainable<void>
    forgotPassword(email: string): Cypress.Chainable<void>

    mockSurveyListResponse(statusCode: number, fixture: string): Cypress.Chainable<void>

    mockRefreshTokenResponse(statusCode: number, fixture: string): Cypress.Chainable<void>
  }
}
