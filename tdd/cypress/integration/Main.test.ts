/// <reference types="cypress" />

it('works', () => {
  cy.visit('/');
  cy.contains('hey').parent().click()
})
