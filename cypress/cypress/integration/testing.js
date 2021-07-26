/// <reference types="cypress" />

context('my tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/');
  })

  it('button press', () => {
    cy.contains('my button').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Pressed');
    })
    cy.on('window:confirm', () => true);
    // cy.get('#result').contains('You successfuly clicked an alert')
  })
});