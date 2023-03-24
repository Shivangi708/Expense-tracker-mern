const express = require("express");
const { loginController, registerController } = require("../controllers/userController");
// router object
const router= express.Router();

//routers
//Post || login
router.post('/login', loginController);

//Post|| Register
router.post('/register', registerController);


module.exports=router;