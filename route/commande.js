const express = require('express');
const commande = require('../model/commande');
const router = new express.Router();


router.get('/Commande', async (req,res)=>{
    try {
        await commande.find({}).then(resultat=>{
            res.status(200).send({status : 200, data : resultat});
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// pour responsable
router.get('/CommandeResto', async (req,res)=>{
    try{
        await commande.find({}).then(resultat=>{
            res.status(200).send({status : 200,data: resultat});
        });
    }catch(error){
        res.status(500).send(error);
    }
});

// pour restaurant
router.get('/CommandeResto/:restaurant', async (req,res)=>{
    try{
        await commande.find({restaurant : req.params.restaurant}).then(resultat=>{
            res.status(200).send({status : 200,data: resultat});
        });
    }catch(error){
        res.status(500).send(error);
    }
});

router.get('/CommandeUtilisateur/:utilisateur',async (req,res)=>{
    try{
        await commande.find({utilisateur : req.params.utilisateur}).then(resultat=>{
            res.status(200).send({status : 200,data: resultat});
        }); 
    }catch(error){
        res.status(500).send(error);
    }
});
// commande par resto 
// commande par utilisateur

module.exports = router;