const mockSignInResponse =(statusCode: number, fixture: string): void => {
  cy.intercept('POST', '**/api/v1/oauth/token', (req) => {
    req.reply({
      statusCode: statusCode,
      fixture: fixture
    })
  })
}

const signIn = (email: string, password: string): void => {
  cy.visit('/sign-in')
  cy.get('[data-test-id=signInEmail]').type(email)
  cy.get('[data-test-id=signInPassword]').type(password)
}

Cypress.Commands.add('mockSignInResponse', mockSignInResponse)
Cypress.Commands.add('signIn', signIn)
