const express = require('express');
const livraison = require('../model/livraison');
const router = new express.Router();


router.post('/Livraison', async (req,res)=>{
    try {
        const livraisons = new livraison(req.body);
        livraisons.save(async function(){
            await livraison.find({}).then(resultat=>{
                res.status(200).send({status: 200, data: resultat});
            });
        });   
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/Livraison', async (req,res)=>{
    try {
        await livraison.find({}).then(resultat=>{
            res.status(200).send({status:200,data:resultat});
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;