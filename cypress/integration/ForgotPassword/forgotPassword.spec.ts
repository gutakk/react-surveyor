import { formSelectors } from './selectors'

describe('Forgot Password Page', () => {
  context('given valid email', () => {
    it('displays instruction message', () => {
      cy.mockForgotPasswordResponse(200)
      cy.forgotPassword(Cypress.env('CYPRESS_VALID_EMAIL'))

      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('We\'ve email you instructions to reset your password')
    })
  })

  context('given invalid email', () => {
    it('displays error message', () => {
      cy.mockForgotPasswordResponse(400)
      cy.forgotPassword('invalid@email.com')

      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Invalid email')
    })
  })

  context('given something went wrong', () => {
    it('displays error message', () => {
      cy.mockForgotPasswordResponse(500)
      cy.forgotPassword(Cypress.env('CYPRESS_VALID_EMAIL'))

      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Something went wrong. Please try again')
    })
  })
})
