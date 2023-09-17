const http = require('http');
/* const data = require('./utils/data'); */
const { getCharById } = require('./controllers/getCharById')

/* http.createServer((req, res) => {
    console.log(data)
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")) {
        res.writeHead(200, { 'Content-Type':'application/json' })
        let id = Number(req.url.split('/').at(-1));
        const [character] = data.filter(char => {
            return char.id === id
        });
        res.end(JSON.stringify(character));
    }
}).listen(3001, 'localhost'); */

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")) {
        let id = Number(req.url.split('/').at(-1));
        getCharById(res, id);
    }
}).listen(3001, 'localhost');