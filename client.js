const net = require("net");
const readlineSync = require('readline-sync');

const port = 3000;
const client = new net.Socket();

client.connect(port, '127.0.0.1', ()=>{
    
    var mensagem = readlineSync.question("Envie seu calculo: ")
    client.write(mensagem);
    console.log("enviado");
})