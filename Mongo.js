var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ekaly-nomena', {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log('database is connected successfully');
}).catch(error =>{
    console.log('database not connected due to '+ error);
});

// mongodb+srv://nomena:ekaly-mean@cluster0.xygsx.mongodb.net/ekaly
