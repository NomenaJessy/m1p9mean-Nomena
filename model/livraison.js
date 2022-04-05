var mongoose = require('mongoose');

var livraisonSchema = new mongoose.Schema({
    livreur: String,
    client: String,
    lieux: String,
    commande: String,
    dateLivraison: Date
});

livraisonSchema.dateLivraison instanceof Date;
const Livraison = mongoose.model('Livraison',livraisonSchema);

module.exports = Livraison;