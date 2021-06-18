import { formSelectors } from './selectors'

describe('Sign In Page', () => {
  context('given valid user credential', () => {
    beforeEach(() => {
      cy.mockSignInResponse(200, 'signInResponse/valid_response.json')
      cy.signIn(Cypress.env('CYPRESS_VALID_EMAIL'), Cypress.env('CYPRESS_VALID_PASSWORD'))
    })

    it('stores token to local storage', () => {
      cy.findByTestId(formSelectors.button).click().should(() => {
        expect(localStorage.getItem('access_token')).eq('test-access-token')
        expect(localStorage.getItem('refresh_token')).eq('test-refresh-token')
        expect(localStorage.getItem('token_type')).eq('Bearer')
      })
    })

    it('redirects to home page', () => {
      cy.findByTestId(formSelectors.button).click()

      cy.url().should('include', '/')
    })
  })

  context('given invalid user credential', () => {
    before(() => {
      cy.mockSignInResponse(400, 'signInResponse/error_response.json')
      cy.signIn('invalid@email.com', 'invalidPassword')
      cy.findByTestId(formSelectors.button).click()
    })

    it('does not redirect', () => {
      cy.url().should('include', '/sign-in')
    })

    it('does not store token to local storage', () => {
      expect(localStorage.getItem('access_token')).to.be.null
      expect(localStorage.getItem('refresh_token')).to.be.null
      expect(localStorage.getItem('token_type')).to.be.null
    })

    it('displays error messages', () => {
      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Invalid email or password')
    })
  })

  context('given internal server error response', () => {
    before(() => {
      cy.mockSignInResponse(500, 'signInResponse/error_response.json')
      cy.signIn(Cypress.env('CYPRESS_VALID_EMAIL'), Cypress.env('CYPRESS_VALID_PASSWORD'))
      cy.findByTestId(formSelectors.button).click()
    })

    it('does not redirect', () => {
      cy.url().should('include', '/sign-in')
    })

    it('does not store token to local storage', () => {
      expect(localStorage.getItem('access_token')).to.be.null
      expect(localStorage.getItem('refresh_token')).to.be.null
      expect(localStorage.getItem('token_type')).to.be.null
    })

    it('displays error messages', () => {
      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Something went wrong. Please try again')
    })
  })

  context('given forgot password clicked', () => {
    it('redirects to forgot password page', () => {
      cy.visit('/sign-in')
      cy.findByTestId(formSelectors.forgotPasswordLink).click()

      cy.url().should('include', '/forgot-password')
    })
  })
})
