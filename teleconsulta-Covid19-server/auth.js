module.exports = function(app, sql) {
    

    const crypto = require("crypto"); // Importamos la libreria Crypto 

    const jwtUtil = require("./jwtUtil");

   app.post("/register", function(request, response) {   //POST PARA  poder mandar informacion al bd 

        request.body.salt = crypto.randomBytes(16).toString("hex"); // Le pedimos que cree variables aleatorias de numero a letras

        var passwordHash = crypto.pbkdf2Sync(request.body.password, request.body.salt, 1000, 64, "sha512").toString("hex");



        request.body.password = passwordHash; // asignamos la variable passwordHash al campo password para que esta al registarse se aplique  la encripciones 


        sql.addUser(request.body, function(result)
         {
            response.send(result);
            
        });    //Añade los datos mandados a la base de datos 

        
    });

  
    app.post("/login", function(request, response) { // funcion para enviar y tenr peticiones y respuestas 

        const Email = request.body.Email; // Mandamos los datos sin formato al apartado correspondiente 
        const password = request.body.password; // Mandamos los datos sin formato al apartado correspondiente 

        sql.login({ Email, password }, result => { // Utilizaremos la funcion que creamos de login anteriormente 
            if (!result) {
                response.send(401); // mandamos error si algun dato es incorretto
                
            } else {
                var token = jwtUtil.signJwt(Email); // mandamos el token original si es correcto los datos
                response.send({ token }); // se manda el token
            }

        });
    });

};


