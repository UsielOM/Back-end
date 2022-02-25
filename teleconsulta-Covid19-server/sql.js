const Sequelize = require("sequelize");
const crypto = require("crypto");


const sequelize = new Sequelize("COVID", "root", "sasa", {
    host: "localhost",
    dialect: "mariadb",
    port: 3306

});

const Usersregister = sequelize.define('Userreg', {

    Name: { type: Sequelize.STRING },
    Last_nameF: { type: Sequelize.STRING },
    Last_nameM: { type: Sequelize.STRING },
    CURP: { type: Sequelize.STRING },
    Date_of_birth: { type: Sequelize.STRING },
    Gender: { type: Sequelize.STRING },
    Email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    salt: { type: Sequelize.STRING, allowNull: false }
});


const Medicsregister = sequelize.define('Medictb', {

    Name: { type: Sequelize.STRING },
    Last_nameF: { type: Sequelize.STRING },
    Last_nameM: { type: Sequelize.STRING },
    CURP: { type: Sequelize.STRING },
    Date_of_birth: { type: Sequelize.STRING },
    Gender: { type: Sequelize.STRING },
    Email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    specialty: { type: Sequelize.STRING },
    Hospital: { type: Sequelize.STRING },
    Professional_ID: { type: Sequelize.STRING },
    consulting: { type: Sequelize.STRING },
    salt: { type: Sequelize.STRING, allowNull: false }
});


init = function() {
    sequelize
        .authenticate()
        .then(() => {
            console.log("Conexion  exitosa ");
        })
        .catch(err => {
            console.error("Conexion fracasada ", err)
        });

    // Usersregister.sync();
    // Medicsregister.sync();


};



// createUser = function(request, callback) {
//     Usersregister.create({
//         Name: request.Name,
//         Last_nameF: request.Last_nameF,
//         Last_nameM: request.Last_nameM,
//         CURP: request.CURP,
//         Date_of_birth: request.Date_of_birth,
//         Gender: request.Gender,
//         Email: request.Email,
//         password: request.password

//     }).then(userr => callback(userr));
// };


addUser = function(user, callback) {
        Usersregister.create({
            Name: user.Name,
            Last_nameF: user.Last_nameF,
            Last_nameM: user.Last_nameM,
            CURP: user.CURP,
            Date_of_birth: user.Date_of_birth,
            Gender: user.Gender,
            Email: user.Email,
            password: user.password,
            salt: user.salt
        }).then(callback(true));
    }
    //Metodo para añadir usuarios ala base de datos 

login = function(request, callback) { //El metodo login con una llamada y una peticion 

        Usersregister.findOne({ // Vinculamos la base de datos de nuestra tabla de arriba y especificamos el tipo de consultaa que queremos recuperar 
            where: {
                Email: request.Email //campo que queremos verificar
            }
        }).then(function(Email) {
            if (Email !== null) {
                var passwordHash = crypto
                    .pbkdf2Sync(request.password, Email.salt, 1000, 64, "sha512")
                    .toString("hex");

                if (passwordHash === Email.password) {
                    callback(true);
                    return;
                }
            }
            callback(false);
        })
    }
    // module.exports.createUser = createUser;
module.exports.init = init;

module.exports.login = login;


module.exports.addUser = addUser;