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
        expect(pokemon.abilities[0].ability.url).to.eq(pokemon.abilities[0].ability.url) 
        expect(pokemon.abilities[0].ability.name).to.eq(pokemon.abilities[0].ability.name) 
  })
})