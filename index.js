// setting up express
const express= require('express');
const port= 9000;
const app= express();
//create a statics files
app.use(express.static('./assets'));

//conneting to the database
const db=require('./config/mongoose');
//create a layout
const expressLayout=require('express-ejs-layouts');
app.use(expressLayout);

//extract style and scripts for sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//use the express router
app.use('/', require('./routes'));

//set up the views engine
app.set('view engine','ejs');
app.set('views','./views');// or
// app.set('views',path.join(__dirname,'views'));
app.listen(port,function(err){
    if(err){
        console.log(`Erorr in a running server : ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});