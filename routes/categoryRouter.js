const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAll);
router.post('/', categoryController.createOne);
router.get('/:id', categoryController.getOne);
router.put('/:id',categoryController.updateOne);
router.delete('/', categoryController.deleteOne);

module.exports = router;