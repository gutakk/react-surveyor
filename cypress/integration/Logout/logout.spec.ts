import { formSelectors } from './selectors'

describe('Logout', () => {
  before(() => {
    cy.mockSurveyListResponse(200, 'surveyListResponse/valid_response.json')
    cy.mockSignInResponse(200, 'signInResponse/valid_response.json')
    cy.signIn(Cypress.env('CYPRESS_VALID_EMAIL'), Cypress.env('CYPRESS_VALID_PASSWORD'))
    cy.findByTestId(formSelectors.signInButton).click()
    cy.findByTestId(formSelectors.userAvatar).click()
    cy.contains('Logout').click()
  })

  it('removes token from local storage', () => {
    expect(localStorage.getItem('access_token')).to.be.null
    expect(localStorage.getItem('refresh_token')).to.be.null
    expect(localStorage.getItem('token_type')).to.be.null
  })

  it('redirects to sign in page', () => {
    cy.url().should('include', '/sign-in')
  })
})
