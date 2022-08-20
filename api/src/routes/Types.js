const { Router } = require('express');
const { getTypes } = require('../controllers');
const router = Router();
const {Types} = require('../db');

//practica con promise
// router.get('/',(req,res,next)=>{
//     return getTypes()
//     .then(types=>{
//         res.status(200).send(types)
//     })
//     .catch(err=>{
//         next(err);
//     })
// })

router.get('/', async (req,res,next)=>{
    try{
        const types = await getTypes()
        res.status(200).send(types)
    }catch(err){
        next(err)
    }

})

//post just for testing
router.post('/',async (req,res,next)=>{
    try{
        const {name} = req.body;
        const newType = await Types.create({
            name
        })
        res.status(201).send(newType)
    }catch(err){
        next(err)
    }
})


module.exports = router;