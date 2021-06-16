describe('Sign In Validation', () => {
  beforeEach(() => {
    cy.visit('/sign-in')
  })

  context('given empty email and password', () => {
    it('displays form validation message', () => {
      cy.get('[data-test-id=formButton]').click()

      cy.get('[data-test-id=alert]').should('be.visible')
      cy.get('[data-test-id=alert]').contains('Email and password are required')
    })
  })

  context('given empty email', () => {
    it('displays form validation message', () => {
      cy.get('[data-test-id=signInPassword]').type('password')
      cy.get('[data-test-id=formButton]').click()

      cy.get('[data-test-id=alert]').should('be.visible')
      cy.get('[data-test-id=alert]').contains('Email and password are required')
    })
  })

  context('given empty password', () => {
    it('displays form validation message', () => {
      cy.get('[data-test-id=signInEmail]').type('test@email.com')
      cy.get('[data-test-id=formButton]').click()

      cy.get('[data-test-id=alert]').should('be.visible')
      cy.get('[data-test-id=alert]').contains('Email and password are required')
    })
  })
})
