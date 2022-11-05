var express = require('express');
var router = express.Router();
tweetschema = require('../models/tweets');

//Mostrar todos los tweets
router.get('/', function(req, res, next) {
  tweetschema.find(function (err, tweets) {
    if (err) return next(err);
    res.json(tweets);
  });
});

//Crear tweet
router.post('/tweets', (req, res) => {
  const tweet = tweetschema(req.body);
  tweet.save().then((tweetCreated) => {
    res.status(200).json(tweetCreated);
  });
});

//editar tweet
router.put('/tweets/:id', (req, res) => {
    const { id } = req.params;
    const { username,text,likes } = req.body;
    const tweet = {
        username, text, likes
    };
    tweetschema.updateOne({ _id: id }, tweet).then(() => {
        res.status(200).json({ message: 'ok' });
    });
    });

//eliminar tweet
router.delete('/tweets/:id', (req, res) => {
  const { id } = req.params;
  tweetschema.deleteOne({ _id: id }).then(() => {
    res.status(200).json({ message: 'ok' });
  });
}
);