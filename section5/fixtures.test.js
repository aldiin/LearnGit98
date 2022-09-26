/// <reference types="cypress" />

describe("Working with input", () => {
  it("Visit the website", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "saucedemo.com");
  });

  it("should try to login and logout", () => {
    cy.get("#user-name").clear();
    cy.get("#user-name").type("username");

    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type("password");

    cy.get('input[name="login-button"]').click();

    cy.get(".error-message-container.error").should(
      "contains.text",
      "Username and password do not match any user in this service"
    );

    cy.fixture("saucedemo").then((user) => {
      const username = user.username;
      const password = user.password;

      cy.get("#user-name").clear();
      cy.get("#user-name").type(username);

      cy.get('input[name="password"]').clear();
      cy.get('input[name="password"]').type(password);

      cy.get('input[name="login-button"]').click();

      cy.url().should("include", "/inventory.html");
      
      cy.get('#react-burger-menu-btn').click()
      cy.get('#logout_sidebar_link').click()
      cy.url().should('equal', 'https://www.saucedemo.com/')
      
    });
  });
  it("should to try checkout", () => {
    cy.fixture("saucedemo").then((user) => {
      const username = user.username;
      const password = user.password;
      const firstname = user.firstname;
      const lastname = user.lastname;
      const postalcode = user.postalcode;

      cy.get("#user-name").clear();
      cy.get("#user-name").type(username);

      cy.get('input[name="password"]').clear();
      cy.get('input[name="password"]').type(password);

      cy.get('input[name="login-button"]').click();

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get(".shopping_cart_badge").click();
      cy.url().should("include", "cart.html");

      cy.get('[data-test="checkout"]').click();
      cy.url().should("include", "checkout-step-one.html");

      cy.get("#first-name").clear();
      cy.get("#first-name").type(firstname);
      cy.get("#last-name").clear();
      cy.get("#last-name").type(lastname);
      cy.get("#postal-code").clear();
      cy.get("#postal-code").type(postalcode);
      cy.get('input[name="continue"]').click();
      cy.url().should("include", "checkout-step-two.html");

      cy.get(".cart_footer").find("#finish").click();
      cy.url().should("include", "checkout-complete.html");
      cy.get("#back-to-products").click();
      cy.url().should("include", "/inventory.html");   
    });
  });
});
// ini isi file user.json untuk cy.fixture
//  "username1": "standard_user",
//  "password1": "secret_sauce",
//  "firstname": "Aldi",
//  "lastname": "Indrawan",
//  "postalcode": "12345"
