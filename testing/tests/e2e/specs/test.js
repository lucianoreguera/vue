// https://docs.cypress.io/api/table-of-contents

describe('Counter Feature', () => {
  it('user can access to page', () => {
    cy.visit('/')
    cy.contains('h1', 'Counter')
  })
  it('user can increment counter', () => {
    cy.visit('/')
    cy.get('.counter').contains('0')
    cy.contains('button', '+').click()
    cy.get('.counter').contains('1')
  })
})
