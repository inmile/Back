const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const authmiddleware = require('../middleware/authmiddleware');


router.post("/",
authController.autenticarUsuario
);

router.get("/", authmiddleware, authController.usuarioAutenticado)


module.exports = router;