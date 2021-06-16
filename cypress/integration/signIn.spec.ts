describe('Sign In Page', () => {
  context('given valid user credential', () => {
    beforeEach(() => {
      cy.mockSignInResponse(200, 'signInResponse/valid_response.json')
      cy.signIn(Cypress.env('CYPRESS_VALID_EMAIL'), Cypress.env('CYPRESS_VALID_PASSWORD'))
    })

    it('redirects to home page', () => {
      cy.get('[data-test-id=formButton]').click()

      cy.url().should('include', '/')
    })

    it('stores token to local storage', () => {
      cy.get('[data-test-id=formButton]').click().should(() => {
        expect(localStorage.getItem('access_token')).to.not.be.null
        expect(localStorage.getItem('refresh_token')).to.not.be.null
        expect(localStorage.getItem('token_type')).to.not.be.null
      })
    })
  })

  context('given invalid user credential', () => {
    beforeEach(() => {
      cy.mockSignInResponse(400, 'signInResponse/error_response.json')
      cy.signIn('invalid@email.com', 'invalidPassword')
    })

    it('does not redirect', () => {
      cy.get('[data-test-id=formButton]').click()

      cy.url().should('include', '/sign-in')
    })

    it('does not store token to local storage', () => {
      cy.get('[data-test-id=formButton]').click().should(() => {
        expect(localStorage.getItem('access_token')).to.be.null
        expect(localStorage.getItem('refresh_token')).to.be.null
        expect(localStorage.getItem('token_type')).to.be.null
      })
    })

    it('displays error messages', () => {
      cy.get('[data-test-id=formButton]').click()

      cy.get('[data-test-id=alert]').should('be.visible')
      cy.get('[data-test-id=alert]').contains('Invalid email or password')
    })
  })

  context('given forgot password clicked', () => {
    it('redirects to forgot password page', () => {
      cy.visit('/sign-in')
      cy.get('[data-test-id=forgotPassword]').click()

      cy.url().should('include', '/forgot-password')
    })
  })
})
