import { formSelectors } from './selectors'

describe('Forgot Password Validation', () => {
  context('given empty email', () => {
    it('displays form validation message', () => {
      cy.visit('/forgot-password')

      cy.findByTestId(formSelectors.button).click()

      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Email is required')
    })
  })
})
