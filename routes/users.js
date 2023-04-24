const express= require('express');
const rouetr= express.Router();

const usercontroller=require('../controllers/users_controller');

rouetr.get('/profile',usercontroller.profile);

module.exports=rouetr;