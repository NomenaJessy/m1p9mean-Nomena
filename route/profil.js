const express = require('express');
var profil = require('../model/profil');
const router = new express.Router();

router.get('/Profil',async (req,res)=>{
    try {
        await profil.find({}).then(resultat=>{
            res.status(200).send({status : 200,data : resultat});
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/Profil', async (req,res)=>{
    try {
        await profil.find({titre : req.body.titre}).then(resultat=>{
            if(resultat.length === 0){
                const profile = new profil(req.body);
                profile.save(async function(){
                    await profil.find({}).then(profiles=>{
                        res.status(200).send({status:200,data:profiles});
                    });
                });
            }else{
                res.status(500).send("Ce profil existe deja");
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;