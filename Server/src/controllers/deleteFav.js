const { Favorite } = require('../DB_connection');

async function deleteFav(req, res) {
    try {
        const { id } = req.params;
        if (!id) res.status(401).json("Faltan datos");
        else {
            const findCharacter = await Favorite.findOne({ where: { id: id } });
            if (!findCharacter) throw Error(`El personaje de id ${id} no se encuentra en favoritos`);
            else {
                await Favorite.destroy({
                    where: {
                        id: id
                    },
                });
            }
            const allFavs = await Favorite.findAll();
            res.json(allFavs);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = deleteFav;
