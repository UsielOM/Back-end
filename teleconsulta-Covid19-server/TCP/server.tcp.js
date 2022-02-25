"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = __importDefault(require("net"));

var TcpServer = /** @class */ (function() {
    function TcpServer(ip, puerto) {

        puerto = 5030;
        this.server = net_1.default.createServer();

        this.startServer(puerto, ip);


    }
    TcpServer.prototype.startServer = function(puerto, host) {
        var _this = this;
        puerto = 5030;
        this.server.on("listening", function() {

            console.log(JSON.stringify({ message: "Tcp Server Listen on port " + puerto }));
            console.log("hOLA.");

        });

        this.server.on("error", function(error) {
            console.log(JSON.stringify({ errorServer: error }));
        });
        this.server.on("connection", function(socket) {
            socket.on("data", function(data) {});
        });
        this.server.listen(puerto, host);
    };
    return TcpServer;
}());
exports.default = TcpServer;