const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bonjour');
});

router.get('/taha', (req, res) => {
    res.send('Bonjour taha');
  });

module.exports = router;
