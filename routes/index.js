const express= require('express');
const router= express.Router();
console.log("my rouetr is loaded");

const homecontroller=require('../controllers/home_controller');
router.get('/',homecontroller.home);
//for any further routes access from here
//router.use(routername,require(./routerfile))
router.use('/users',require('./users'));
module.exports=router;
