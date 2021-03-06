const express = require('express');
const app = express();
const cors = require('cors');
require('./Mongo');
const utilisateurRouter = require('./route/utilisateur');
const platRouter = require('./route/plat');
const profilRouter = require('./route/profil');
const commandeRouter = require('./route/commande');
const livraisonRouter = require('./route/livraison');

app.use(express.json());
app.use(cors());

app.use(utilisateurRouter);
app.use(platRouter);
app.use(profilRouter);
app.use(commandeRouter);
app.use(livraisonRouter);

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 1042");
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});