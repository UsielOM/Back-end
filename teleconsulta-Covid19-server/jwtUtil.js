const jwt = require("jsonwebtoken");
const fs = require("fs");// nos permite tener acceso a la clave privda y publica



module.exports = {
    signJwt: function(Email) { // obtiene el emial del suario 
        
        var payload = { Email: Email }; // cargamos los datos necesarios 
        var privateKey = fs.readFileSync("./private.key", "utf8"); // asignamos una llave privada para la sincronisacionde de archivos  

        var signOptions = { //opcines de firma 
            expiresIn: "12h", // El token expira cada 12 horas
            algorithm: "RS256" // este algoritmo que se implementa para el token 
        };
        var token = jwt.sign(payload, privateKey, signOptions); // creamos una variable que contenga toda la configuracion previa 
        return token; // retornamos un token 
    },

    verifyJwt: function(token) 
    {

        var publicKey = fs.readFileSync("./public.key", "utf8");
        var verifyOptions = {
            expiresIn: "12h",
            algorithm: [RS256]
        };
        try {
            return jwt.verify(token, publicKey, verifyOptions);
        } catch (err) {

            return false;
        }
    }
};






