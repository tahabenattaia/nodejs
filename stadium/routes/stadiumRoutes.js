const express = require('express');
const router = express.Router();
const stadiumController = require('../controllers/stadiumController');

router.post('/', stadiumController.createStadium);
router.get('/', stadiumController.getAllStadiums);
router.get('/:id', stadiumController.getStadiumById);
router.put('/:id', stadiumController.updateStadium);
router.delete('/:id', stadiumController.deleteStadium);

module.exports = router;
