
let myFavorites = [];

function postFav(req, res) {
    myFavorites.push(req.body);
    res.json(myFavorites);
}

function deleteFav(req, res) {
    const id = Number(req.params.id);
    myFavorites = myFavorites.filter(fav => fav.id !== id);
    res.json(myFavorites);
}

function showAllFavs(req, res) {res.json(myFavorites)}

module.exports = { 
    postFav, 
    deleteFav ,
    showAllFavs
};