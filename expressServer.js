import express from 'express';

const server = express();
server.listen(3000);

server.get('/', (req, res) => {
    res.send({message: 'Hello Express'});
});

//* replaces .ico, working as a generic domain
server.get('/favicon.*', (req, res) => {
    res.send({message: 'Hello Express'});
    res.sendFile('./favicon....');
});