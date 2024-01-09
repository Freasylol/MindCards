const Router = require('express');
const router = new Router();
const cardSetControllerController = require('../controllers/cardSetController');

router.get('/', cardSetControllerController.getAll);
router.put('/changeCardSetName/:id', cardSetControllerController.changeCardSetName);
router.post('/', cardSetControllerController.createOne);
router.get('/:id', cardSetControllerController.getOne);
router.put('/:id',cardSetControllerController.updateOne);
router.get('/findByUserId/:userId', cardSetControllerController.findByUserId)
router.delete('/:id', cardSetControllerController.deleteOne);

module.exports = router;