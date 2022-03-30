const express = require('express');
var plat = require('../model/plat');
const router = new express.Router();

router.get('/Plat',async (req,res)=>{
    try{
        await plat.find({}).then(resultat=>{
            res.status(200).send({status : 200,data : resultat});
        });
    }catch(error){
        res.status(500).send(error);
    }
});

router.get('/Plat/:id',async (req,res)=>{
    try{
        await plat.findById(req.params.id).then(resultat=>{
            res.status(200).send({status : 200,data: resultat});
        });
    }catch(error){
        res.status(500).send(error);
    }
});

router.post('/Plat',async (req,res)=>{
    try {
        await plat.find({}).then(resultat =>{
            if(resultat.length === 0){
                const Plats = new plat(req.body);
                Plats.save(async function(){
                    await plat.find({NomPlat : req.body.NomPlat,Restaurant : req.body.Restaurant}).then(liste=>{
                        res.status(200).send({status : 200,data : liste});
                    });
                });
            }else{
                res.status(500).send({status : 500,message:"Ce plat existe deja"})
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;