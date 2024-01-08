const Router = require('express');
const router = new Router();
const cardController = require('../controllers/cardController');

router.get('/', cardController.getAll);
router.post('/', cardController.createOne);
router.get('/findByCardSet/:cardSetId', cardController.getCardsByCardSet);
router.get('/:id', cardController.getOne);
router.put('/:id',cardController.updateOne);
router.delete('/', cardController.deleteOne);

module.exports = router;