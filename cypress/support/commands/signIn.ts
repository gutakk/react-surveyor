function mockSignInResponse(statusCode: number, fixture: string): void {
  cy.intercept('POST', '**/api/v1/oauth/token', (req) => {
    req.reply({
      statusCode: statusCode,
      fixture: fixture
    })
  })
}

function signIn(email: string, password: string): void {
  cy.visit('/sign-in')
  cy.get('input[name=email]').type(email)
  cy.get('input[name=password]').type(password)
}

Cypress.Commands.add('mockSignInResponse', mockSignInResponse)
Cypress.Commands.add('signIn', signIn)
