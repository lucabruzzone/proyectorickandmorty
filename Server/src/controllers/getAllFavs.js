const { Favorite } = require('../DB_connection');

async function getAllFavs(req, res) {
    try {
        const allFavs =  await Favorite.findAll();
        res.json(allFavs);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = getAllFavs;
