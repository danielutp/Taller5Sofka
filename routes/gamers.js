// Libraries
const express = require('express');
const router = express.Router();
const Game = require('../models/game');
const Gamer = require('../models/gamer');
const ObjectId = require('mongodb').ObjectID;

/** Se obtiene los nombres de los jugadores por el frontend */
router.get('/creategames', function (req, res, next) {
  res.render('index')
});
/** Busca el juego creado */
router.get('/:id', function (req, res, next) {
  const id = req.params.id

  const data = Game.findOne(
    {
      _id: ObjectId(id)
    },
    );
  data
    .then(result => res.json(result))
    .catch(err => console.error(err));
});

/** Se crea un nuevo juego */
router.post('/', function (req, res, next) {
  let gamers = []
  req.body.gamers.forEach(gamer => {
    const gamercreated = new Gamer({
      name: gamer,
    });
    gamercreated.save()
    gamers.push(gamercreated)
  });
  const game = new Game({
    gamers: gamers,
    inProgress: true,
  });
  game.save()
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });
  });
module.exports = router;