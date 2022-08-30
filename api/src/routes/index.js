const { Router } = require('express');

const pokemonRoute = require('./Pokemons');
const typesRoute = require('./Types');


const router = Router();


router.use('/pokemons', pokemonRoute); // /api/pokemons
router.use('/types', typesRoute);      // /api/types



module.exports = router;
