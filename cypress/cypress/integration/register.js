/// <reference types="cypress" />
/**
 * username, password, role, email, phone number
 */
context('my tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/');
  })

  it('register success', () => {
    // Input data
    cy.get('[data-testid="usernameInput"]')
    .type('bob');
    cy.get('[data-testid="passwordInput"]').type('pass');
    cy.get('[data-testid="roleInput"]').type('admin');
    cy.get('[data-testid="emailInput"]').type('bob@gmail.com');
    cy.get('[data-testid="phoneNumberInput"]').type('465-547-1843');
    // Submit form
    cy.contains('My Register').click();

    // Checking resulting alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Account Registered');
    })
    cy.on('window:confirm', () => true);
  })

  it('invald username', () => {
    // Input data
    cy.get('[data-testid="usernameInput"]').type('steve');
    cy.get('[data-testid="passwordInput"]').type('pass');
    cy.get('[data-testid="roleInput"]').type('admin');
    cy.get('[data-testid="emailInput"]').type('bob@gmail.com');
    cy.get('[data-testid="phoneNumberInput"]').type('465-547-1843');
    // Submit form
    cy.contains('My Register').click();

    // Checking resulting alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Username taken');
    })
    cy.on('window:confirm', () => true);
  })
});