import { formSelectors } from './selectors'

describe('Sign In Page', () => {
  context('given valid user credential', () => {
    beforeEach(() => {
      cy.mockSignInResponse(200, 'signInResponse/valid_response.json')
      cy.signIn(Cypress.env('CYPRESS_VALID_EMAIL'), Cypress.env('CYPRESS_VALID_PASSWORD'))
    })

    it('redirects to home page', () => {
      cy.findByTestId(formSelectors.button).click()

      cy.url().should('include', '/')
    })

    it('stores token to local storage', () => {
      cy.findByTestId(formSelectors.button).click().should(() => {
        expect(localStorage.getItem('access_token')).eq('test-access-token')
        expect(localStorage.getItem('refresh_token')).eq('test-refresh-token')
        expect(localStorage.getItem('token_type')).eq('Bearer')
      })
    })
  })

  context('given invalid user credential', () => {
    beforeEach(() => {
      cy.mockSignInResponse(400, 'signInResponse/error_response.json')
      cy.signIn('invalid@email.com', 'invalidPassword')
    })

    it('does not redirect', () => {
      cy.findByTestId(formSelectors.button).click()

      cy.url().should('include', '/sign-in')
    })

    it('does not store token to local storage', () => {
      cy.findByTestId(formSelectors.button).click().should(() => {
        expect(localStorage.getItem('access_token')).to.be.null
        expect(localStorage.getItem('refresh_token')).to.be.null
        expect(localStorage.getItem('token_type')).to.be.null
      })
    })

    it('displays error messages', () => {
      cy.findByTestId(formSelectors.button).click()

      cy.findByTestId(formSelectors.alert).should('be.visible')
      cy.findByTestId(formSelectors.alert).contains('Invalid email or password')
    })
  })

  context('given internal server error response', () => {
    beforeEach(() => {
      cy.mockSignInResponse(500, 'signInResponse/error_response.json')
      cy.signIn(Cypress.env('CYPRESS_VALID_EMAIL'), Cypress.env('CYPRESS_VALID_PASSWORD'))
    })

    it('does not redirect', () => {
      cy.findByTestId(formSelectors.button).click()

      cy.url().should('include', '/sign-in')
    })

    it('does not store token to local storage', () => {
      cy.findByTestId(formSelectors.button).click().should(() => {
        expect(localStorage.getItem('access_token')).to.be.null
        expect(localStorage.getItem('refresh_token')).to.be.null
        expect(localStorage.getItem('token_type')).to.be.null
      })
    })

    it('displays error messages', () => {
      cy.findByTestId(formSelectors.button).click()

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
