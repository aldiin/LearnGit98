{
    "abilities": [
        {
            "ability": {
                "name": "limber",
                "url": "https://pokeapi.co/api/v2/ability/7/"
            },
        }
    ],
 }

 expect(response.body.name).to.eq(ability.name)

 