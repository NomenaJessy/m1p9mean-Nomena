var mongoose = require('mongoose');

var platSchema = new mongoose.Schema({
    NomPlat : String,
    NomCategorie : String,
    Description : String,
    Restaurant : String,
    Prix : Number
});

const Plat = mongoose.model("Plat",platSchema);

module.exports = Plat;