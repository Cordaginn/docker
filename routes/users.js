let express = require('express');
let router = express.Router();
let { scrypt } = require('../utils');

const users = [];


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
/* POST users listing. */
router.post('/', async function (req, res, next) {
  const data = req.body;
  const pass = await scrypt(data.password, '1gkh13jgh1j', 64);
  users.push({
    type: req.query.type,
    id: crypto.randomUUID(),
    login: data.login,
    passwordHash: pass.toString('base64'),
    email: data.email,
  });
  res.send(users);
});
/* GET users listing. */
router.get('/first', function (req, res, next) {
  const result = users
    .filter(user => user.type === 'first')
    .map(({ type, ...rest }) => rest);
  res.json(result);
  res.end();
});
/* GET users listing. */
router.get('/second', function (req, res, next) {
  const result = users
    .filter(user => user.type === 'second')
    .map(({ type, ...rest }) => rest);
  res.json(result);
  res.end();
});
/* GET users listing. */
router.get('/third', function (req, res, next) {
  const result = users
    .filter(user => user.type === 'third')
    .map(({ type, ...rest }) => rest);
  res.json(result);
  res.end();
});

module.exports = router;
