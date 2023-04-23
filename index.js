// setting up express
const express= require('express');
const port= 9000;
const app= express();
//use the express router
app.use('/', require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`Erorr in a running server : ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});