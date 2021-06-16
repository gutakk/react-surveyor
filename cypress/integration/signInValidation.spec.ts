describe('Sign In Validation', () => {
  beforeEach(() => {
    cy.visit('/sign-in')
  })

  context('given empty email and password', () => {
    it('displays form validation message', () => {
      cy.get('button[type=submit]').click()

      cy.get('.alert').should('be.visible')
      cy.get('.alert').contains('Email and password are required')
    })
  })

  context('given empty email', () => {
    it('displays form validation message', () => {
      cy.get('input[name=password]').type('password')
      cy.get('button[type=submit]').click()

      cy.get('.alert').should('be.visible')
      cy.get('.alert').contains('Email and password are required')
    })
  })

  context('given empty password', () => {
    it('displays form validation message', () => {
      cy.get('input[name=email]').type('test@email.com')
      cy.get('button[type=submit]').click()

      cy.get('.alert').should('be.visible')
      cy.get('.alert').contains('Email and password are required')
    })
  })
})
