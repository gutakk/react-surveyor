describe('Sign In Page', () => {
  describe('Given valid user credential', () => {
    beforeEach(() => {
      cy.mockSignInResponse(200, 'signInResponse/valid_response.json')
      cy.signIn(Cypress.env('CYPRESS_VALID_EMAIL'), Cypress.env('CYPRESS_VALID_PASSWORD'))
    })

    it('Redirects to home page', () => {
      cy.get('button[type=submit]').click()

      cy.url().should('include', '/')
    })

    it('Stores token to local storage', () => {
      cy.get('button[type=submit]').click().should(() => {
        expect(localStorage.getItem('access_token')).to.not.be.null
        expect(localStorage.getItem('refresh_token')).to.not.be.null
        expect(localStorage.getItem('token_type')).to.not.be.null
      })
    })
  })

  describe('Given invalid user credential', () => {
    beforeEach(() => {
      cy.mockSignInResponse(400, 'signInResponse/error_response.json')
      cy.signIn('invalid@email.com', 'invalidPassword')
    })

    it('Does not redirect', () => {
      cy.get('button[type=submit]').click()

      cy.url().should('include', '/sign-in')
    })

    it('Does not store token to local storage', () => {
      cy.get('button[type=submit]').click().should(() => {
        expect(localStorage.getItem('access_token')).to.be.null
        expect(localStorage.getItem('refresh_token')).to.be.null
        expect(localStorage.getItem('token_type')).to.be.null
      })
    })

    it('Displays error messages', () => {
      cy.get('button[type=submit]').click()

      cy.get('.alert').should('be.visible')
      cy.get('.alert').contains('Invalid email or password')
    })
  })

  describe('Given form validation', () => {
    beforeEach(() => {
      cy.visit('/sign-in')
    })

    describe('Given empty email and password', () => {
      it('Displays form validation message', () => {
        cy.get('button[type=submit]').click()

        cy.get('.alert').should('be.visible')
        cy.get('.alert').contains('Email and password are required')
      })
    })

    describe('Given empty email', () => {
      it('Displays form validation message', () => {
        cy.get('input[name=password]').type('password')
        cy.get('button[type=submit]').click()

        cy.get('.alert').should('be.visible')
        cy.get('.alert').contains('Email and password are required')
      })
    })

    describe('Given empty password', () => {
      it('Displays form validation message', () => {
        cy.get('input[name=email]').type('test@email.com')
        cy.get('button[type=submit]').click()

        cy.get('.alert').should('be.visible')
        cy.get('.alert').contains('Email and password are required')
      })
    })
  })

  describe('Given forgot password clicked', () => {
    it('Redirects to forgot password page', () => {
      cy.visit('/sign-in')
      cy.get('.form-input-group__forgot-password').click()

      cy.url().should('include', '/forgot-password')
    })
  })
})
