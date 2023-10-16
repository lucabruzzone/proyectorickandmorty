const express = require('express');
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const deleteUser = require('../controllers/deleteUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const getAllFavs = require('../controllers/getAllFavs');
const getCharById = require('../controllers/getCharById');

const router = express.Router();

router.post("/user", postUser);
router.delete("/user", deleteUser);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/favorites", getAllFavs);

router.get("/character/:id", getCharById);

module.exports = router;