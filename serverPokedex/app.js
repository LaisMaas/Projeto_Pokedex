const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`


const generatePokemonPromises = () => Array(150).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json()))

    

const fetchPokemon = () => {
    const pokemonPromises = generatePokemonPromises()

    Promise.all(pokemonPromises)
        .then(pokemons => {
            return pokemons.reduce((acumulador, pokemon) => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)
                acumulador += `
                        <li class="card ${types[0]}">
                            <img class="card-image" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
                                <h2 class="card-title>${pokemon.id}. ${pokemon.name}</h2>
                                <p class="card-subtitle">${types.join(' | ')}</p>                
                        </li>`

                return acumulador
            }, '')
        })
        .then(pokemons => {

            const ul = document.querySelector('[data-js="pokedex"]')
            ul.innerHTML = pokemons
        })
}
fetchPokemon()












































