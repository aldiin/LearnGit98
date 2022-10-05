describe('Validate Header', () => {
    it('Succesfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include','application/json; charset=utf-8')
    });

    it('Succesfully validate status', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('equal',200)
    });
    
    it('Succesfully validate name', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body')
        .should('include', {name:'ditto'})
    });
});