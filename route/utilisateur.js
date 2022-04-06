const express = require('express');
var utilisateur = require('../model/utilisateur');
const router = new express.Router();
const sha1 = require('sha1');
const nodemailer = require('../config/nodemailer.config');


router.post('/Connexion', async (req,res)=>{
    try{
        req.body.MotDePasse = sha1(req.body.MotDePasse);
        await utilisateur.findOne({Mail: req.body.Mail,MotDePasse : req.body.MotDePasse}).then(resultat=>{
            const token = resultat['_id'];
            res.status(200).send({status : 200,data: resultat,token: token});
        });
    }catch(error){
        res.status(500).send({status : 500,message: "Verifiez votre adresse mail et/ou mot de passe"});
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
                        const token = resultat['_id'];
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

router.post('/InscriptionProfil',async (req,res)=>{
    try {
        req.body.MotDePasse ='';
        await utilisateur.find({Mail: req.body.Mail}).then(async resultat=>{
            if(resultat.length === 0){
                const user = new utilisateur(req.body);
                await user.save(async function(){
                    await utilisateur.findOne({Mail: req.body.Mail}).then(resultat=>{
                        nodemailer.sendConfirmationMail(resultat['Nom'],resultat['Mail'],resultat['_id']);
                        res.status(200).send("Mail envoye");
                    });
                });
            }else{
                res.status(500).send("Cet utilisateur existe deja");
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/findUser', async (req,res)=>{
    try{
        const utilisateurs = await utilisateur.find({});
        res.status(200).send({status: 200, data:utilisateurs});
    }catch(error){
        res.status(500).send(error);
    } 
});

router.get('/findUserById/:id', async (req,res)=>{
    try{
        await utilisateur.findById(req.params.id).then(resultat=>{
            res.status(200).send({status: 200,data:resultat});
        });
    }catch(error){
        res.status(500).send(error);
    } 
});

router.get('/findProfil/:profil', async (req,res)=>{
    try {
        await utilisateur.find({Profil : req.params.profil}).then(resultat=>{
            res.status(200).send({status: 200,data: resultat});
        });
    } catch (error) {
        res.status(500).send(error);
    }
});




module.exports = router;