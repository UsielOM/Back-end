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

var b;

var mySerial = new SerialPort('COM4', {

    baudRate: 230400, //115200


});

mySerial.on('open', function() {
    console.log('Opened Serial Port');


});

mySerial.on('data', function(data) {
    // var a = data;
    // if(a.log() == 3)
    // {

    // }

    // var a = data

    var c = data;

    console.log(c.toString());
    if (c < 51) {

    }



});


mySerial.on('err', function(err) {
    console.log(err.message);

    if (err) {
        alert("Failed to open port.");
    } else {

        document.getElementById("COMPortStatus").innerText = "COM3 Is Open"
        Scale.attachPortHandlers();

    }
});

serverad.listen(4090, () => {
    console.log('Server on port', 4090)


})




exports.default = serverad;