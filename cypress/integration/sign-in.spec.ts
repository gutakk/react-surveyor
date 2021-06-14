describe('Sign In', () => {
  describe('Given valid user credential', () => {
    it('Redirects to home page', () => {
      cy.visit('http://localhost:3000/sign-in')
      cy.get('input[name=email]').type('thiramate@nimblehq.co')
      cy.get('input[name=password]').type('12345678')
      cy.get('button[type=submit]').click()

      cy.url().should('include', '/')
    })

    it('Stores token to local storage', () => {
      cy.visit('http://localhost:3000/sign-in')
      cy.get('input[name=email]').type('thiramate@nimblehq.co')
      cy.get('input[name=password]').type('12345678')
      cy.get('button[type=submit]').click().should(() => {
        expect(localStorage.getItem('access_token')).to.not.be.null
        expect(localStorage.getItem('refresh_token')).to.not.be.null
        expect(localStorage.getItem('token_type')).to.not.be.null
      })
    })
  })

  describe('Given invalid user credential', () => {
    it('Does not redirect', () => {
      cy.visit('http://localhost:3000/sign-in')
      cy.get('input[name=email]').type('invalid@email.com')
      cy.get('input[name=password]').type('invalidPassword')
      cy.get('button[type=submit]').click()

      cy.url().should('include', '/sign-in')
    })

    it('Does not store token to local storage', () => {
      cy.visit('http://localhost:3000/sign-in')
      cy.get('input[name=email]').type('invalid@email.com')
      cy.get('input[name=password]').type('invalidPassword')
      cy.get('button[type=submit]').click().should(() => {
        expect(localStorage.getItem('access_token')).to.be.null
        expect(localStorage.getItem('refresh_token')).to.be.null
        expect(localStorage.getItem('token_type')).to.be.null
      })
    })

    it('Displays error messages', () => {
      cy.visit('http://localhost:3000/sign-in')
      cy.get('input[name=email]').type('invalid@email.com')
      cy.get('input[name=password]').type('invalidPassword')
      cy.get('button[type=submit]').click()

      cy.get('.alert').should('be.visible')
      cy.get('.alert').contains('Invalid email or password')
    })

    describe('Given empty email', () => {
      it('Displays form validation message', () => {
        cy.visit('http://localhost:3000/sign-in')
        cy.get('#signInForm').within(() => {
          cy.get('#email').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
        })
      })
    })

    describe('Given invalid email format', () => {
      it('Displays form validation message', () => {
        cy.visit('http://localhost:3000/sign-in')
        cy.get('#signInForm').within(() => {
          cy.get('#email').type('invalidEmailFormat')
          cy.get('#email').invoke('prop', 'validationMessage').should('to.not.be.null')
        })
      })
    })

    describe('Given empty password', () => {
      it('Displays form validation message', () => {
        cy.visit('http://localhost:3000/sign-in')
        cy.get('#signInForm').within(() => {
          cy.get('#email').type('test@email.com')
          cy.get('#password').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
        })
      })
    })
  })

  describe('Given forgot password clicked', () => {
    it('Redirects to forgot password page', () => {
      cy.visit('http://localhost:3000/sign-in')
      cy.get('.form-input-group__forgot-password').click()

      cy.url().should('include', '/forgot-password')
    })
  })
})
