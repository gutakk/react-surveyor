import { formSelectors } from './selectors'

describe('Sign In Validation', () => {
  before(() => {
    cy.visit('/sign-in')
  })

  context('given empty email and password', () => {
    it('displays form validation message', () => {
      cy.findByTestId(formSelectors.button).click()

      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Email and password are required')
    })
  })

  context('given empty email', () => {
    it('displays form validation message', () => {
      cy.findByTestId(formSelectors.passwordField).type('password')
      cy.findByTestId(formSelectors.button).click()

      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Email and password are required')
    })
  })

  context('given empty password', () => {
    it('displays form validation message', () => {
      cy.findByTestId(formSelectors.emailField).type('test@email.com')
      cy.findByTestId(formSelectors.button).click()

      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Email and password are required')
    })
  })
})
