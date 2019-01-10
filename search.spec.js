/// <reference types="Cypress" />

context('Search', () => {
  beforeEach(() => {
    cy.visit('https://www.gumtree.com.au/')
  })

  it('search from homepage', () => {
    // https://on.cypress.io/click
    cy.get('#categoryId-wrp-option-18320').click({force: true})
    cy.get('#search-query').type('bmw x5').should('have.value', 'bmw x5')
    cy.get('.header__search-button').click()
    cy.get('.search-results-page').should('exist')
  })

})