// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.get("#user_login").clear();
  cy.get("#user_login").type(username);
  cy.get('input[name="user_password"]').clear();
  cy.get('input[name="user_password"]').type(password);
  cy.get('input[name="submit"]').click();
});

Cypress.Commands.add("pay", () => {
  cy.get("#sp_payee").select("apple");
  cy.get("#sp_account").select("Checking");
  cy.get('input[name="amount"]').clear();
  cy.get('input[name="amount"]').type("12");
  cy.get("#sp_date").click();
  //choose previous month
  cy.contains("Prev").click();
  //choose next month
  cy.contains("Next").click();
  //choose date 24
  cy.contains("24").click();

  cy.get('input[name="description"]').clear();
  cy.get('input[name="description"]').type("description");

  cy.get("#pay_saved_payees").click();
});
