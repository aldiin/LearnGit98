/// <reference types="cypress" />

describe("Working with inputs", function () {
    it("Visit the website", () => {
      cy.visit("http://zero.webappsecurity.com/login.html");
      cy.url().should("include", "login.html");
    });
    it("should fill username", function () {
      cy.get("#user_login").clear();
      cy.get("#user_login").type("username");
    });
    it("should fill password", function () {
      cy.get('input[name="user_password"]').clear();
      cy.get('input[name="user_password"]').type("password");
    });
    it("should fill checkbox", function () {
      cy.get('[type="checkbox"]').check();
      cy.get('[type="checkbox"]').first().check();
    });
  
    it("should try to login and payment", function () {
      cy.fixture("user").then((user) => {
        const username = user.username;
        const password = user.password;
  
        cy.login(username, password);
        cy.url().should("include", "account-summary.html");
  
        cy.get("#pay_bills_tab > a").click();
        cy.url().should("contains", "pay-bills.html");
  
        cy.pay();
        cy.get("#alert_content").should(
          "contains.text",
          "The payment was successfully submitted."
        );
      });
    });
  });
  