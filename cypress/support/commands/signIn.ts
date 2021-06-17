import { formSelectors } from '../../integration/SignIn/selectors'

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
  cy.findByTestId(formSelectors.emailField).type(email)
  cy.findByTestId(formSelectors.passwordField).type(password)
}

Cypress.Commands.add('mockSignInResponse', mockSignInResponse)
Cypress.Commands.add('signIn', signIn)
