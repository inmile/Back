// const jwt = require('jsonwebtoken');

// module.exports = function (req, res, next) {
//     //Leer token desd el header de postman
//     const token = req.header("x-auth-token");
//     //console.log( token );

//     //revisar si hay token o no

//     if (!token) {
//         return res.status(400).json({ msg: "No hay un token" });
//     }

//     //validar token

//     try {
//         const cifrado = jwt.verify(token, process.env.SECRETA)
//         req.usuario = cifrado.usuario;
//         //console.log(cifrado.usuario);
//         next();
//     } catch (error) {
//         res.status(400).json({ msg: "Token no válido" })
//     }

// };

const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    //Leer token desd el header de postman
    const token = req.header("x-auth-token");
    //console.log( token );

    //revisar si hay token o no

    if (!token) {
        return res.status(400).json({ msg: "No hay un token" });
    }

    //validar token

    try {
        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.usuario = cifrado.usuario;
        //console.log(cifrado.usuario);
        next();
    } catch (error) {
        res.status(400).json({ msg: "Token no válido" })
    }

};