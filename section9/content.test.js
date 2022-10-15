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
    cy.request("GET", "https://pokeapi.co/api/v2/pokemon/ditto", pokemon).then(
      (response) => {
        expect(response.body.abilities[0].ability.name).to.eq(pokemon.abilities[0].ability.name)
      }
    )
  })
})