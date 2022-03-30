const express = require('express');
var utilisateur = require('../model/utilisateur');
const router = new express.Router();
const sha1 = require('sha1');

router.post('/Connexion', async (req,res)=>{
    try{
        req.body.MotDePasse = sha1(req.body.MotDePasse);
        await utilisateur.findOne({Mail: req.body.Mail,MotDePasse : req.body.MotDePasse}).then(resultat=>{
            const token = sha1(resultat['_id'] + resultat['Nom']);
            res.status(200).send({status : 200,data: resultat,token: token});
        });
    }catch(error){
        res.status(500).send({status : 500,message: "Verifiez votre adresse mail et/ou mot de passe"});
    } 
});

router.get('/findUser', async (req,res)=>{
    try{
        const utilisateurs = await utilisateur.find({});
        res.status(200).send(utilisateurs);
    }catch(error){
        res.status(500).send(error);
    } 
});

router.post('/Inscription',async (req,res)=>{
    try{
        req.body.MotDePasse = sha1(req.body.MotDePasse);
        await utilisateur.find({Mail : req.body.Mail}).then(async resultat =>{
            if(resultat.length === 0){
                const user = new utilisateur(req.body);
                await user.save(async function(){
                    await utilisateur.findOne({Mail: req.body.Mail,MotDePasse : req.body.MotDePasse}).then(resultat=>{
                        const token = sha1(resultat['_id'] + resultat['Nom']);
                        res.status(200).send({status : 200,data: resultat,token: token});
                    });
                });
            }else{
                res.status(400).send("Cet utilisateur existe deja");
            }
        });
    }catch(error){
        console.log(error);
    }
});

module.exports = router;