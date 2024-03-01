// url base da PokeAPI
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemon(pokemon) {
    try{
        const response = await fetch(`${baseUrl}${pokemon}`);

        if(!response.ok){
            throw new Error('Pokemon não encontrado');
        }
        const data = await response.json();
        console.log('Reposta OK', data)
        return data;
    }catch(error){
        console.error('Erro na requisição', error);
        return null;
    }

}
getPokemon(25)
.then(pokemon =>{
    if (pokemon){
        console.log('Nome do Pokémon: ', pokemon.name);
        console.log('Peso do Pokémon: ', pokemon.weight);
        console.log('Altura do Pokémon: ', pokemon.height);
    }else{
        console.log('Pokemon não encontrado');
    }
})

