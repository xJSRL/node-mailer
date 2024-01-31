var express = require('express');
var router = express.Router();
var { emailer } = require('../js/emailer');

router.post('/email', async function (req, res, next) {
  const {
    email, name, message
  } = req.body.Mailer

  console.log(req.body);

  const result = await emailer(email, name, message);

  if (result === 1) {
    res.send('Email sent!');
  } else {
    res.status(500).send('Failed to send email.');
  }
});

module.exports = router;
