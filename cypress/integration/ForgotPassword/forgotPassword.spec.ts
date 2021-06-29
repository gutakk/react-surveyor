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

  context('given internal server error', () => {
    it('displays error message', () => {
      cy.mockForgotPasswordResponse(500)
      cy.forgotPassword(Cypress.env('CYPRESS_VALID_EMAIL'))

      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Something went wrong. Please try again')
    })
  })

  context('given back button clicked', () => {
    it('redirects to sign in page', () => {
      cy.visit('/forgot-password')
      cy.findByTestId(formSelectors.backButton).click()

      cy.url().should('include', '/sign-in')
    })
  })

  context('given empty email', () => {
    it('displays form validation message', () => {
      cy.visit('/forgot-password')

      cy.findByTestId(formSelectors.button).click()

      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Email is required')
    })
  })
})
