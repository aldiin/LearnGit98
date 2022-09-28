/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open index page', () => {
	cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I fill search field', () => {
	cy.get('#searchTerm').type('online {enter}')
})

Then('I should see search result page', () => {
	cy.get('h2').should('contain.text', 'Search Results:')
})
