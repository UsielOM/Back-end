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



var mySerial = new SerialPort('COM5', {

    baudRate: 9600, //115200






});

mySerial.on('open', function() {
    console.log('Opened Serial Port');

});

mySerial.on('data', function(data) {

    console.log(data.toString());

});

serverad.listen(3090, () => {
    console.log('Server on port', 3090)
})

exports.default = serverad;