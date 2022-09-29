const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'

class SearchPage{
    static visit () {
        cy.visit(URL)
    }
    
    static fillSearch (online) {
        cy.get(SEARCH).type(online)
    }
}
export default SearchPage