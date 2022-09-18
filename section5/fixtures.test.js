/// <reference types="cypress" />

describe('Working with input', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url('include', 'saucedemo.com')
    });
    it('should fill username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('username')    
    });
    it('should fill password', () => {
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('password')
    });
    it('should try to login and checkout', () => {
        // cy.fixture("user").then(user =>{
        //     const username = user.username
        //     const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type('standard_user') 

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type('secret_sauce')

            cy.get('input[name="login-button"]').click()

            // cy.get('.error-message-container.error').should('contains.text', 'Username and password do not match any user in this service')  
            
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('.shopping_cart_badge').click()
            cy.get('[data-test="checkout"]').click()
            cy.get('#first-name').clear()
            cy.get('#first-name').type('aldi') 
            cy.get('#last-name').clear()
            cy.get('#last-name').type('indrawan') 
            cy.get('#postal-code').clear()
            cy.get('#postal-code').type('12345') 
            cy.get('input[name="continue"]').click()
            cy.get('.cart_footer').find('#finish').click()
            cy.get('.header_secondary_container').should('contains.text', 'Checkout: Complete!')     
            

        })
        
    });
// });
