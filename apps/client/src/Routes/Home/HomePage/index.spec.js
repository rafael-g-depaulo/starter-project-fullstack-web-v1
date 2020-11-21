/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('test', () => {
    // https://on.cypress.io/type
    cy.get('pre')
      .should('contain.text', JSON.stringify({msg: "world"}, null, 2))
  })
})
