function signIn(email: string, password: string): void {
  cy.visit('/sign-in')
  cy.get('input[name=email]').type(email)
  cy.get('input[name=password]').type(password)
}

Cypress.Commands.add('signIn', signIn)
