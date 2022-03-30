var mongoose = require('mongoose');
const util = require('util');

mongoose.connect('mongodb://localhost:27017/ekaly-nomena', {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log('database is connected successfully');
}).catch(error =>{
    console.log('database not connected due to '+ error);
});


// console.log(mongoose.Document);
// console.log(util.inspect(mongoose));