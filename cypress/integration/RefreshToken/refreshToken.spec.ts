import { formSelectors } from './selectors'

describe('Refresh Token', () => {
  context('given expired access token', () => {
    // context('given valid refresh token', () => {
    //   it('redirects back to survey list page', () => {
    //     cy.mockSignInResponse(200, 'signInResponse/valid_response.json')
    //     cy.mockSurveyListResponse(401, 'surveyListResponse/unauthorized_response.json').as('call1')
    //     cy.mockRefreshTokenResponse(200, 'refreshTokenResponse/valid_response.json')

    //     cy.signIn(Cypress.env('CYPRESS_VALID_EMAIL'), Cypress.env('CYPRESS_VALID_PASSWORD'))
    //     cy.findByTestId(formSelectors.signInButton).click()


    //     // cy.url().should('include', '/')
    //   })
    // })

    context('given invalid refresh token', () => {
      it('redirects back to sign in page', () => {
        cy.mockSignInResponse(200, 'signInResponse/valid_response.json')
        cy.signIn(Cypress.env('CYPRESS_VALID_EMAIL'), Cypress.env('CYPRESS_VALID_PASSWORD'))
        cy.findByTestId(formSelectors.signInButton).click()

        cy.mockSurveyListResponse(401, 'surveyListResponse/unauthorized_response.json')
        cy.mockRefreshTokenResponse(400, 'refreshTokenResponse/error_response.json')

        cy.url().should('include', '/sign-in')
      })
    })
  })
})
