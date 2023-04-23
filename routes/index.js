const express= require('express');
const router= express.Router();
console.log("my rouetr is loaded");

const homecontroller=require('../controllers/home_controller');
router.get('/',homecontroller.home);
module.exports=router;
