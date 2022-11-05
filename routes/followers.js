var express = require('express');
var router = express.Router();
followers = require('../models/followers');

//Mostrar todos los followers de un usuario
router.get('/followers/:username', function(req, res, next) {
    followers.find({username: req.params.username}, function (err, followers) {
        if (err) return next(err);
        res.json(followers);
    });
});

//Seguir a un usuario
router.post('/followers', (req, res) => {
    const follower = followers(req.body);
    follower.save().then((followerCreated) => {
        res.status(200).json(followerCreated);
    });
    });

//Dejar de seguir a un usuario
router.delete('/followers/:username', (req, res) => {
    const { username } = req.params;
    followers.deleteOne({ username: username }).then(() => {
        res.status(200).json({ message: 'ok' });
    });
    }
);
