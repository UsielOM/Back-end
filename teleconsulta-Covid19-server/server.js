const express = require("express");
const cors = require("cors");

const sql = require("./sql")
const bodyParser = require("body-parser");

const app = express("");


// var __importDefault = (this && this.__importDefault) || function(mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// var server_tcp_1 = __importDefault(require("./tcp/server.tcp"));


var corsOptions = {

    origin: ["http://localhost:4200"]

}


app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3090, () => {
    console.log("Server is started and listening.");
    sql.init();


    //server = new server_tcp_1.default(process.env.TCP_HOST, parseInt(process.env.PORT_HOST));


});





app.get("/", function(request, response) {
    response.send("Hello Node.js :)");

});

require("./usuarios")(app, sql);


require("./auth")(app, sql);

// require("./register")(app, sql); 5569363157 - Juan SV