const USUARIOS = require("./mock-usuarios");

module.exports = function(app, sql) {
    app.get("/usuarios", function(request, response) {

        response.send(USUARIOS);
    })
    app.get("/usuarios/:id", function(request, response) {
        response.send(USUARIOS.filter(usuario => usuario.id === request.params.id)[0]);
    });


};