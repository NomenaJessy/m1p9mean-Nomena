var mongoose = require('mongoose');

var livraisonSchema = new mongoose.Schema({

});

const Livraison = mongoose.model('Livraison',livraisonSchema);

module.exports = Livraison;