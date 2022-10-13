describe("Validate Content", () => {
  it("Pokemon", () => {
    var pokemon = {
      abilities: [
        {
          ability: {
            name: "limber",
            url: "https://pokeapi.co/api/v2/ability/7/",
          }
        }
      ]
    }
    cy.request("GET", "https://pokeapi.co/api/v2/ability/7/", pokemon).then((response) => {
        expect(response.body.limber).to.eq(pokemon.limber)
    })
  })
})
