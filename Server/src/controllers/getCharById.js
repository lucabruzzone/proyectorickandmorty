const axios = require('axios');

/* ES COMO UN BFF */

function getCharById(res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((res) => res.data).then(data => {
        const { name, gender, species, origin, image, status, episode } = data;
        console.log(data)
        console.log(name)
        if (name) {
            const character = {
                id: id,
                name: name,
                gender: gender,
                sepcies: species,
                origin: origin,
                image: image,
                status: status,
                episode: episode
            }
            res.writeHead(200, { 'Content-Type':'application/json' });
            res.end(JSON.stringify(character));
        }
        else window.alert(`No se encontró el personaje con el id: ${id}`)
    }).catch(error => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error);
        throw new Error(error);
    })
}

module.exports = { getCharById }