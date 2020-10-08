const pokemon = require("../model/pokedex.json")

const novaListaPokemon = pokemons.map(pokemon => {
    const novoPokemon = {               
        nome: pokemon.name, 
        name: name.id, 
        art_url: pookemon.art_url,
        types: pokemon.types
    }
    return novoPokemon
})


const getMusicas = (request, response) => {
    response.status(200).send(novaListaPokemon)
}

const getMusicasbyId = (request, response) => {
    const id = request.params.id
    const pokemon = novaListaPokemon.find(item => item.id == id)
    if (pokemon) {
        response.status(200).send(pokemon)
    } else {
        response.status(404).send("Pokemon não localizado!")
    }
}






