const { Router } = require('express');
const router = Router();
const {Types} = require('../db');


//las actions le van a pegar a /api/XXXX y desde aca nosotros
// le pegamos a los endpoints con los middle, hacemos lo que tengamos que hacer
// con la info y devolvemos un json(problemente) con la info que se necesita!

router.get('/',(req,res,next)=>{
    return Types.findAll()
    .then(types=>{
        res.status(200).send(types)
    })
    .catch(err=>{
        next(err);
    })
})
// router.get('/', async (req,res,next)=>{
//     try{
//         const types = await Types.findAll();
//         res.status(200).send(types)
//     }catch(err){
//         next(err)
//     }

// })

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