import { formSelectors } from '../../integration/ForgotPassword/selectors'

const mockForgotPasswordResponse = (statusCode: number): void => {
  cy.intercept('POST', '**/api/v1/passwords', (req) => {
    req.reply({
      statusCode: statusCode
    })
  })
}

const forgotPassword = (email: string): void => {
  cy.visit('/forgot-password')
  cy.findByTestId(formSelectors.emailField).type(email)
  cy.findByTestId(formSelectors.button).click()
}

Cypress.Commands.add('mockForgotPasswordResponse', mockForgotPasswordResponse)
Cypress.Commands.add('forgotPassword', forgotPassword)
