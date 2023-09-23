const express = require('express');
const login = require('../controllers/login');
const getCharById = require('../controllers/getCharById');
const { postFav, deleteFav, showAllFavs } = require('../controllers/handleFavorites');

const router = express.Router();
/* const router = require('express').Router(); */

// http://localhost:3001/rickandmorty/characetr/5  ===>
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/favorites", showAllFavs);

module.exports = router;