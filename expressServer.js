import express from 'express';
import { exec } from 'child_process';

const server = express();
server.listen(3000);

server.get('/', (req, res) => {
    //res.send({message: 'Hello Non Favicon'});
    console.log(req.url);

    //collects the ip of any request sent to the website
    var ip = req.socket.remoteAddress;
    if (ip.substring(0, 7) == "::ffff:") { //removes the ::ffff: in the event that the ip is the IPv6 version of an IPv4 address
        ip = ip.substring(7);
    }
    console.log(ip);
    //res.send({message: 'Your Ip address is:'});
    res.send({ip});
});

//* replaces .ico, working as a generic domain
server.get('/favicon.*', (req, res) => {
    res.send({message: 'Hello Express'});
    res.sendFile('./favicon....');
    console.log(req.url);
});

/*
//callback method
exec('ls /', (err, stdout, stderr) => {
    if (err) {
        process.exit(1);
    }
    console.log(stdout);
});

//cleaner method (promise method)
const main = async () => {
    try { //replaces the actual error in the callback method
        const { stdout, stderr } = await exec('ls /');
        console.log(stdout);
    }
    catch (error) {
        process.exit(1);
    }
}

main();
*/