const Router = require('express');
const router = new Router();
const cardSetControllerController = require('../controllers/cardSetController');

router.get('/', cardSetControllerController.getAll);
router.post('/', cardSetControllerController.createOne);
router.get('/:id', cardSetControllerController.getOne);
router.put('/:id',cardSetControllerController.updateOne);
router.delete('/', cardSetControllerController.deleteOne);

module.exports = router;