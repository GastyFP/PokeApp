const { Router } = require('express');

const pokemonRoute = require('./Pokemons');
const typesRoute = require('./Types');

//las actions le van a pegar a /api/XXXX y desde aca nosotros
// le pegamos a los endpoints con los middle, hacemos lo que tengamos que hacer
// con la info y devolvemos un json(problemente) con la info que se necesita!


const router = Router();


router.use('/pokemons', pokemonRoute); // /api/pokemons
router.use('/types', typesRoute);      // /api/types



module.exports = router;
