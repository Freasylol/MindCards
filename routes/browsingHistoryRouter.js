const Router = require('express');
const router = new Router();
const browsingHistoryController = require('../controllers/browsingHistoryController');

router.get('/', browsingHistoryController.getAll);
router.post('/', browsingHistoryController.createOne);
router.get('/:id', browsingHistoryController.getOne);
router.put('/:id',browsingHistoryController.updateOne);
router.delete('/', browsingHistoryController.deleteOne);

module.exports = router;