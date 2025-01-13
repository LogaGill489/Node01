console.log('Server Boot.');

// Native JavaScript Web Server

import http from 'http';

const server = http.createServer();

server.listen(3000); //starts listening for events in the server on port 3000

//events

//req is the request, res it the response
//every time you change something you need to restart node (i.e add a new event to the website)
server.on('request', (req, res) => {
    console.log('Request!!!', req.url);
    res.write('Hello HTTP');
    res.end();
});