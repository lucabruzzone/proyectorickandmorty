const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});


/* const http = require('http'); */
/* const data = require('./utils/data'); */
/* const { getCharById } = require('./controllers/getCharById'); */

/* http.createServer((req, res) => {
    console.log(data)
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")) {
        res.writeHead(200, { 'Content-Type':'application/json' })
        let id = Number(req.url.split('/').at(-1));
        const [character] = data.find(char => {
            return char.id === id
        });
        res.end(JSON.stringify(character));
    }
}).listen(3001, 'localhost'); */

/* http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")) {
        let id = Number(req.url.split('/').at(-1));
        getCharById(res, id);
    }
}).listen(3001, 'localhost'); */
