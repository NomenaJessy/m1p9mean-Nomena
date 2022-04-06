var mongoose = require('mongoose');

var utilisateurSchema = new mongoose.Schema({
    Nom:String,
    Pseudo:String,
    DateNaissance: Date,
    Profil: String,
    Mail:String,
    MotDePasse:String
});
utilisateurSchema.DateNaissance instanceof Date;

var Utilisateur = mongoose.model('Utilisateur',utilisateurSchema);

module.exports = Utilisateur;

// module.exports.Connexion = function(mail,motdepasse,callback){
//     Utilisateur.find({Mail : mail,MotDePasse : motdepasse},callback);
// }
