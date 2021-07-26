/// <reference types="cypress" />

it('works', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('hello, world!');
  });
  cy.on('window:confirm', () => true);
  cy.visit('/');
  cy.contains('hey').click();
})
