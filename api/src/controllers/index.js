const {Pokemons, Types} = require('../db');
const axios = require('axios');

const getPokemons = async ()=>{
    try{
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
        // const pokemonDb = await Pokemons.findAll();
        const pokePromises = data.results.map(p=>axios.get(p.url))
        //console.log(pokePromises)
        let pokemonApi = Promise.all(pokePromises)//devuelve un array con cada promesa
        .then(response=>{
            let rawPokemon = response.map(p=>p.data) //ya tengo la data raw de cada pkmn
            let realPokemon = []; //meto lo que filtro en el raw
            rawPokemon.map(p=>{
                realPokemon.push({
                    id: p.id,
                    image: p.sprites.other['official-artwork'].front_default,
                    name: p.name,
                    type: p.types.lenght > 1 ? [{name:p.types[0].type.name},{name:p.types[1].type.name}]:[{name:p.types[0].type.name}],
                    hp: p.stats[0].base_stat,
                    atk: p.stats[1].base_stat,
                    def: p.stats[2].base_stat,
                    speed: p.stats[5].base_stat,
                    height: p.height,
                    weight: p.weight
                })
            })
            return realPokemon;
        })
        return pokemonApi;
    }catch(err){
        console.log(err)
    }
};

const findPokemon = async (ID)=>{
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ID}`);
        // console.log('ACAAA',response.data)
            let p = response.data
            let realPokemon = {
                id: p.id,
                image: p.sprites.other['official-artwork'].front_default,
                name: p.name,
                type: p.types.length > 1 ? [{name:p.types[0].type.name},{name:p.types[1].type.name}]:[{name:p.types[0].type.name}],
                hp: p.stats[0].base_stat,
                atk: p.stats[1].base_stat,
                def: p.stats[2].base_stat,
                spd: p.stats[5].base_stat,
                height: p.height,
                weight: p.weight
            }
            return realPokemon;
    }catch(err){
        console.log(err)
    }
};


const getTypes = async () =>{
    try{
        const {data} = await axios.get('https://pokeapi.co/api/v2/type')
        // console.log(data.results)
        const types = data.results.map(t=>t.name)
        return types
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    getPokemons,
    findPokemon,
    getTypes
}