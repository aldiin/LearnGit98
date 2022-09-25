/// <reference types="cypress" />

describe('Navbar Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url('include', 'index.html')
	})

	it('Should display online banking content', () => {
		cy.get('#onlineBankingMenu').click()
		cy.url().should('equal', 'http://zero.webappsecurity.com/online-banking.html')
	})

	it('Should display feedback content', () => {
		cy.get('#feedback').click()
		cy.url().should('equal', 'http://zero.webappsecurity.com/feedback.html')
	})

	it('Should display homepage content', () => {
		cy.contains('Zero Bank').click()
		cy.url().should('equal', 'http://zero.webappsecurity.com/index.html')
	})
})
