
const net = require('net');

const port = 3000

const server = net.createServer( (socket)=>{
    console.log(socket.address());
    
    socket.on('data', (event)=>{
        const dados = event.toString().split(' ')

        console.log(dados);

        const numberOne =  dados[0];
        const operation = dados[1];
        const numberTwo = dados[2];
    
    
        if (operation === '+') {
            console.log(`${numberOne} + ${numberTwo} = ${parseInt(numberOne) + parseInt(numberTwo)}`);
            socket.write(`${numberOne} + ${numberTwo} = ${parseInt(numberOne) + parseInt(numberTwo)}`);
        } else if (operation === '-') {
            console.log(`${numberOne} - ${numberTwo} = ${parseInt(numberOne) - parseInt(numberTwo)}`);
            socket.write(`${numberOne} - ${numberTwo} = ${parseInt(numberOne) - parseInt(numberTwo)}`);
        } else if (operation === '*') {
            console.log(`${numberOne} * ${numberTwo} = ${parseInt(numberOne) * parseInt(numberTwo)}`);
            socket.write(`${numberOne} * ${numberTwo} = ${parseInt(numberOne) * parseInt(numberTwo)}`);
        } else if (operation === '/') {
            console.log(`${numberOne} / ${numberTwo} = ${parseInt(numberOne) / parseInt(numberTwo)}`);
            socket.write(`${numberOne} / ${numberTwo} = ${parseInt(numberOne) / parseInt(numberTwo)}`);
        } else {
          console.log('Invalid operation');
          socket.write('Invalid operation');
        }
    
        socket.end();
    })
});

server.listen(port, '127.0.0.1', ()=>{
console.log(`Servidor rodando na porta ${port}`);
})