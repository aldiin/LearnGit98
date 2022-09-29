/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import SearchPage from './searchPage';

Given('I open index page', () => {
	SearchPage.visit()
})

When('I fill search field', () => {
	SearchPage.fillSearch('online {enter}')
})

Then('I should see search result page', () => {
	cy.get('h2').should('contain.text', 'Search Results:')
})
