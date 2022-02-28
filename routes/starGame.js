// Libraries
const express = require('express');
const router = express.Router();

const Game = require('../models/gamebet');
const ObjectId = require('mongodb').ObjectID;

router.get('/starGame', function (req, res, next) {  
});

router.post('/', function (req, res, next) {  
  const gamestar = new Game({
    id: id,
    gamebet: gamebet,
  });
  gamestar.save()
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });
  res.status(201).send()
});


module.exports = router;
