const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
//hola


const appsa = express();
const serverad = http.createServer(appsa);
//const io = socketIo.listen(serverad);

const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();



var mySerial = new SerialPort('COM4', {

    baudRate: 115200 //9600 






});

mySerial.on('open', function() {
    console.log('Opened Serial Port');
    var c = 5;
    mySerial.write(`El valor de`);

});

mySerial.on('data', function(data) {

    console.log(data.toString());




});

serverad.listen(4090, () => {
    console.log('Server on port', 4090)
})

exports.default = serverad;