const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: "variables.env" });

exports.autenticarUsuario = async (req, res) => {
    const { password, email } = req.body;

    try {
        //revisar que el correo esté  registrado
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: "El usuario no existe" });
        }
        //validar el password
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);
        if (!passwordCorrecto) {
            return res.status(404).json({ msg: "Password incorrecto" });
        }

        //si todo es correcto: crear y firmar un token

        let payload = {
            usuario: { id: usuario.id },
        };
        //res.json(payload);
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: '30d', //30 dias
            },
            (error, token) => {
                if (error) throw error;
                // mensaje de confirmación
                res.json({ token });
            }


       )




        console.log("Permitir ingresar")
    } catch (error) {
        console.log(error);
    }
}

exports.usuarioAutenticado = async (req, res) => {
    try{
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({usuario});
    }catch(error){
        res.status(403).json({msg: "Hubo un error" });
    }
}
