var express = require('express');
var router = express.Router();
userschema = require('../models/users');
//Mostrar todos los usuarios
router.get('/', function(req, res, next) {
  userschema.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});
//Crear usuario
router.post('/users', (req, res) => {
  const user = userschema(req.body);
  user.save().then((userCreated) => {
    res.status(200).json(userCreated);
  });
});
//editar usuario
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, username } = req.body;
  const user = {
    name,
    age,
    username,
  };
  userschema.updateOne({ _username: id }, user).then(() => {
    res.status(200).json({ message: 'ok' });
  });
});
//eliminar usuario
router.delete('/users/:username', (req, res) => {
  const { id } = req.params;
  userschema.deleteOne({ _username: id }).then(() => {
    res.status(200).json({ message: 'ok' });
  });
});
module.exports = router;
