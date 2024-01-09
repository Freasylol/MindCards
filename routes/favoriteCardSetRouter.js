const Router = require('express');
const router = new Router();
const favoriteCardSetController = require('../controllers/favoriteCardSetController');

router.get('/', favoriteCardSetController.getAll);
router.get('/findByUserId/:userId', favoriteCardSetController.findByUserId);
router.post('/', favoriteCardSetController.createOne);
router.get('/:id', favoriteCardSetController.getOne);
router.put('/:id',favoriteCardSetController.updateOne);
router.delete('/', favoriteCardSetController.deleteOne);

module.exports = router;