// setting up express
const express= require('express');
const port= 8000;
const app= express();
app.listen(port,function(err){
    if(err){
        console.log(`Erorr in a running server : ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});