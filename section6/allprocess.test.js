/// <reference types="cypress" />

describe('Login / Logout Test', function () {
	before(() => {
		cy.visit('https://www.saucedemo.com/')
		cy.url().should('include', 'saucedemo.com')
	})
	it('Melakukan Login mengunakan data invalid', function () {
		cy.get('#login_button_container').should('be.visible')
		cy.get('#user-name').type('invalid username')
		cy.get('#password').type('invalid password')
		cy.get('input[name=login-button]').click()
	})

	it('Menampilkan Pesan Error', function () {
		cy.get('.error-message-container.error')
			.should('be.visible')
			.and(
				'contains.text',
				'Epic sadface: Username and password do not match any user in this service'
			)
	})

	it('Melakukan login menggunakan data valid', function () {
		cy.fixture('saucedemo').then(user => {
			const username = user.username
			const password = user.password

        
			cy.login(username, password)
			cy.url().should('include', 'inventory.html')
		})
	})

	it('Melakukan logout dari aplikasi', function () {
		cy.get('#react-burger-menu-btn').click()
		cy.get('#logout_sidebar_link').click()
		cy.url().should('include', 'saucedemo.com')
	})
})
describe('Checkout Products', function () {
	before(() => {
		cy.fixture('saucedemo').then(user => {
			const username = user.username
			const password = user.password

			cy.login(username, password)
		})
	})
	it('Menambahkan products ke keranjang dan checkout products', function () {
		cy.fixture('saucedemo').then(user => {
			const username = user.username
			const password = user.password
			const firstname = user.firstname
			const lastname = user.lastname
			const postalcode = user.postalcode

			cy.get('#add-to-cart-sauce-labs-backpack').click()
			cy.get('#shopping_cart_container').click()
			cy.url().should('include', '/cart.html')

			cy.get('#checkout').click()
			cy.url().should('include', '/checkout-step-one.html')

			cy.get('#first-name').type(firstname)
			cy.get('#last-name').type(lastname)
			cy.get('#postal-code').type(postalcode)
			cy.get('#continue').click()
			cy.url().should('include', '/checkout-step-two.html')

			cy.get('#finish').click()
			cy.url().should('include', '/checkout-complete.html')

			cy.get('#back-to-products').click()
			cy.url().should('include', '/inventory.html')
			cy.get('.title').should('contain.text', 'Products')
		})
	})
})
