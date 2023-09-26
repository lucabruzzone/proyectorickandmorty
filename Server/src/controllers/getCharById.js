/* const axios = require('axios');


function getCharById(res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((res) => res.data).then(data => {
        const { name, gender, species, origin, image, status, episode } = data;
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
        res.end(`No se encontró el personaje con el id: ${id}`);
    })
}

module.exports = { getCharById } */

const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

/* function getCharById(req, res) {
    const id = Number(req.params.id);
    axios(`${URL}${id}`)
    .then(({data}) => {
        if (data) {
            const { name, gender, species, origin, image, status, episode } = data;
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
            res.json(character);
        }
        else {
            window.alert(`No se encontró el personaje con el id: ${id}`)
            res.status(404).json({message: 'Not fount'})
        }
    })
    .catch(error => {
        res.status(500).json({message: error})
    })
} */
async function getCharById(req, res) {
    try {
        const id = Number(req.params.id);
        const { data } = await axios(`${URL}${id}`);
        if (data) {
            const { name, gender, species, origin, image, status, episode } = data;
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
            res.json(character);
        }
        else {
            window.alert(`No se encontró el personaje con el id: ${id}`)
            res.status(404).json({message: 'Not fount'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = getCharById;