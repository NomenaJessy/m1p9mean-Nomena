const config = require('./auth.config');
const nodemailer = require('nodemailer');

const user = config.user;
const pass = config.pass;


const transport = nodemailer.createTransport({
    host : 'smtp.mailtrap.io',
    port: 2525,
    auth:{
        user: user,
        pass: pass
    },
});

module.exports.sendConfirmationMail = (name, email, confirmationCode)=>{
        console.log("Check");
        transport.sendMail({
          from: user,
          to: email,
          subject: "Veuillez confirmer votre compte",
          html: `<h1>Email de confirmation</h1>
              <h2>Hello ${name}</h2>
              <p>Merci . Veuillez modifier votre mot de passe en suivant ce lien.</p>
              <a href=http://localhost:4200/confirm/${confirmationCode}> Cliquez ici</a>
              </div>`,
        }).catch(err => console.log(err));
};