var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

Object.defineProperty(exports, "__esModule", { value: true }); //define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.Object.defineProperty()
var serialport_1 = __importDefault(require("serialport")); //Se delcara la varibale para utilizar un puerto 
var SerialIO = /** @class */ (function() { //Este módulo es un contenedor basado en promesas para el paquete node-serialport. Le permite interactuar con dispositivos sobre una base de comando y respuesta. En función de un comportamiento definido, el final de una respuesta se deterimiza y la respuesta completa se devuelve como un resuelto
    function SerialIO() {
        this.serialPort = new serialport_1.default("COM4" + 4400, //Linux /dev/+nombre serial
            //Windows unicamente COM + numero
            {
                baudRate: 9600, //115200
                autoOpen: false,

            });
        this.dataRead = "";


        this.readPort();


        this.openPort();
    }

    SerialIO.prototype.openPort = function() {

        this.serialPort.on("open", function() {
            console.log(JSON.stringify({ message: "SerialPort Connected Sucesfully" }));
        });
        this.serialPort.open(function(error) {
            if (error) {

                var message = JSON.stringify({ message: error });
                console.log(message);

            }
        });
    };

    SerialIO.prototype.readPort = function() {

        var _this = this;
        this.serialPort.on("data", function(data) {
            return __awaiter(_this, void 0, void 0, function() {
                var _a;
                return __generator(this, function(_b) {

                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/ , data.toString()];
                        case 1:
                            _a.dataRead = _b.sent();
                            console.log(this.dataRead);
                            return [2 /*return*/ ];
                    }
                });
            });
        });
    };

    return SerialIO;
}());
exports.default = SerialIO;