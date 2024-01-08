const Router = require('express');
const router = new Router();
const userRateController = require('../controllers/userRateController');;

router.get('/', userRateController.getAll);
router.get('/findByCardSet/:cardSetId', userRateController.getCardsByCardSet);
router.post('/', userRateController.createOne);
router.get('/:id', userRateController.getOne);
router.put('/:id',userRateController.updateOne);
router.delete('/', userRateController.deleteOne);

module.exports = router;