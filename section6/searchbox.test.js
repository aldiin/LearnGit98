/// <reference types="cypress" />

describe('searchbox test', function(){
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });
    it('Should show search result page', () => {
        cy.get('h2').should('contain.text','Search Results')
        cy.get('a').should('contain.text','Zero - Free Access to Online Banking')
        cy.get('a').should('contain.text','Zero - Online Statements')
    });
});