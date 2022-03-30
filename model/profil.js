const mongoose = require('mongoose');

const profilSchema = new mongoose.Schema({
    titre : String
});

const Profil = mongoose.model('Profil',profilSchema);
module.exports = Profil;