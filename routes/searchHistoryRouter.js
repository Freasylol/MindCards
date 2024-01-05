const Router = require('express');
const router = new Router();
const searchHistoryController = require('../controllers/searchHistoryController');

router.get('/', searchHistoryController.getAll);
router.post('/', searchHistoryController.createOne);
router.get('/:id', searchHistoryController.getOne);
router.put('/:id',searchHistoryController.updateOne);
router.delete('/', searchHistoryController.deleteOne);

module.exports = router;