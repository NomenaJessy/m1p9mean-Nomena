var mongoose = require('mongoose');

var commandeSchema = new mongoose.Schema({
    restaurant : String,
    utilisateur : String,
    plat : [String],
    quantite: [Number],
    livraison : String,
    prixTotal : Number,
    dateCommande : Date
});

commandeSchema.dateCommande instanceof Date;
const Commande = mongoose.model('Commande',commandeSchema);
module.exports = Commande;