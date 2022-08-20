const { Router, response } = require('express');
const router = Router();
const {Pokemons , Types} = require('../db');
const axios = require('axios');
const {getPokemons,findPokemon} = require('../controllers/index')

//las actions le van a pegar a /api/XXXX y desde aca nosotros
// le pegamos a los endpoints con los middle, hacemos lo que tengamos que hacer
// con la info y devolvemos un json(problemente) con la info que se necesita!

//next en este caso lo que hace es pasar el error al siguiente mware
//que está en app.js y es el endware que atrapa los err de sequelize

router.get('/', async (req,res , next)=>{
    try{ // if name == true, its a query, so loading all pkmns is useless
        const {name} = req.query;
        if(name){
            const foundApi = await findPokemon(name)
            if(foundApi) {
                return res.status(200).json(foundApi)
            }else{
                let found = await Pokemons.findOne({where:{name: name}})
                if(found !== null) return res.status(200).json(found)
                else{ return res.status(404).send('Pokemon not found')}
            }
        }
        //no query? ok get me all pkmns
        const pokemonsApi = await getPokemons();
        const pokemonsDb = await Pokemons.findAll();
        let allpokemon = [...pokemonsApi,...pokemonsDb]
         res.status(200).json(allpokemon);
    }catch(err){
        next(err)
    }
})

router.get('/:idPokemon',async (req,res, next)=>{
    try{
        const {idPokemon} = req.params
        if(idPokemon.length <= 4){
            const found = await findPokemon(idPokemon)
            if(found){
                return res.status(200).json(found)
            }
        }
        if(idPokemon.length === 36){
            const found = await Pokemons.findByPk(idPokemon)
            if(found.length !== 0) return res.status(200).json(found)
            return res.status(404).send('Pokemon not found :S')
        }
        return res.status(404).send('Pokemon not found :S')
    }catch(err){
        next(err);
    }
})


router.post('/',async (req,res, next)=>{ 
    try{
        const {name} = req.body
        const found = await Pokemons.findOne({
            where:{
                name : name
            }
        })
        if(found) return res.status(400).send('El nombre del pokemon ya existe');
        if(!name) return res.status(400).send('No se ingreso un nombre');
        const new_pokemon = await Pokemons.create(req.body);
        return res.status(201).json(new_pokemon);
        //una vez que lo creo, no deberia relacionarle un type?
    }catch(err){
        next(err)
    }  
})

router.post('/:idPokemon/type/:idType', async(req,res,next)=>{
    try{
        const{idPokemon,idType} = req.params;
        const pokemon = await Pokemons.findByPk(idPokemon)
        await pokemon.addType(idType)
        res.send(pokemon)
    }catch(err){
        next(err);
    }
})


//No se si los voy a necesitar//

// router.put('/',(req,res)=>{
//     res.status(200).send('put en /characters')
// })
// router.delete('/',(req,res)=>{
//     res.status(200).send('delete en /characters')
// })

module.exports = router;