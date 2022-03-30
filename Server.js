const express = require('express');
const app = express();
require('./Mongo');
// const utilisateurRouter = require('./route/utilisateur');
// const platRouter = require('./route/plat');
const profilRouter = require('./route/profil');
// const commandeRouter = require('./route/commande');

app.use(express.json());

// app.use(utilisateurRouter);
// app.use(platRouter);
app.use(profilRouter);
// app.use(commandeRouter);

app.listen(1042,function(){
    console.log("Server is running on port 1042");
});

