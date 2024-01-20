const {SearchHistory} = require('../models/models');

class SearchHistoryController {
    async getAll(req, res) {
        return await SearchHistory.findAll().then(type => res.json(type));
    }

    async createOne(req, res) {
        const {search_text} = req.body;
        const search_history = await SearchHistory.create({search_text});
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const userLog = await UserLog.create({date: formattedDate, action: `User ${userId} created new searchHistory`, userId});
        return res.json(search_history);
    }

    async getOne(req, res) {
        const id = Number(req.params.id);
        const search_history = await SearchHistory.findOne({where: {id: id}});
        return res.json(search_history);
    }

    async updateOne(req, res) {
        const id = Number(req.params.id);
        const {search_text} = req.body;
        const search_history = await SearchHistory.update({search_text}, {where: {id: id}});
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const userLog = await UserLog.create({date: formattedDate, action: `User ${userId} updated searchHistory`, userId});
        return res.json(search_history);
    }

    async deleteOne(req, res) {
        const search_history = SearchHistory.destroy({
          where: {
            id: req.body.id
          }
        })
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const userLog = await UserLog.create({date: formattedDate, action: `User ${search_history.data.userId} deleted searchHistory`, userId: search_history.data.userId});
    }
}

module.exports = new SearchHistoryController();