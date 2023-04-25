//create a library of mongoose
const mongoose= require('mongoose');
//conneting the data base
mongoose.connect('mongodb://localhost/codeial_development', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
});
//aquire the connection to check if it is successfull conneted 
const db= mongoose.connection;
//check the error
db.on('error',console.error.bind(console,"Error connecting to MongoDB")) ;
//up and runnig then print the message to the db
db.once('open',function(){
    console.log('successfully connneted to the database');
});

module.exports=db;