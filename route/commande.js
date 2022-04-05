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

router.post('/Commande', async (req,res)=>{
    try {
        if(req.body.plat.length === req.body.quantite.length){
            const commandes = new commande(req.body);
            commandes.save(async function(){
                await commande.find({utilisateur: req.body.utilisateur,restaurant: req.body.restaurant,dateCommande: req.body.dateCommande}).then(resultat=>{
                    res.status(200).send({status: 200,data: resultat});
                }); 
            });
        }else{
            res.status(500).send({status:500, message: "Le nombre de quantite ne correspond pas au nombre de plat"});
        }
    } catch (error) {
        res.status(500).send(error);
    }
});
// commande par resto 
// commande par utilisateur

module.exports = router;