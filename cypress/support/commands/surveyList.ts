const mockSurveyListResponse = (statusCode: number, fixture: string): void => {
  cy.intercept('POST', '**/graphql', (req) => {
    req.reply({
      statusCode: statusCode,
      fixture: fixture
    })
  })
}

Cypress.Commands.add('mockSurveyListResponse', mockSurveyListResponse)
