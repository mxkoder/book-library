const express = require('express');
const readersController = require('../controllers/readers');


const router = express.Router();

router.post('/', readersController.create);

// router.post('/:artistId/album', albumController.create)

// router.get('/', artistController.read);
// router.get('/:artistId', artistController.readById);

// router.patch('/:artistId', artistController.updateArtist);

// router.delete('/:artistId', artistController.deleteArtist);

module.exports = router