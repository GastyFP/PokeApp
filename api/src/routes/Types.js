const { Router } = require('express');
const { getTypes } = require('../controllers');
const router = Router();
const {Types} = require('../db');

//promise
// router.get('/',(req,res,next)=>{
//     return getTypes()
//     .then(types=>{
//         res.status(200).send(types)
//     })
//     .catch(err=>{
//         next(err);
//     })
// })

//clearly this works only in development mode, once db is loaded,
//this always returns 304... in case some new type is added in API
//this wouldnt work correctly. 

router.get('/', async (req,res,next)=>{
    try{
        const types = await getTypes();//getting types from API
        const loaded = await Types.findAll(); //are they loaded in DB?
        // console.log(loaded);
        if(loaded.length === 0){ //NO
            const result = await Types.bulkCreate(types.map(t=>{return {name: t}}))
            //  console.log(result)
            return res.status(200).send(result)
        }else{//YES
            return res.status(304).send(loaded)
        } 
    }catch(err){
        next(err)
    }

})

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