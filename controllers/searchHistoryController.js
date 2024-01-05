const {SearchHistory} = require('../models/models');

class SearchHistoryController {
    async getAll(req, res) {
        return await SearchHistory.findAll().then(type => res.json(type));
    }

    async createOne(req, res) {
        const {search_text} = req.body;
        const search_history = await SearchHistory.create({search_text});
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
        return res.json(search_history);
    }

    async deleteOne(req, res) {
        SearchHistory.destroy({
          where: {
            id: req.body.id
          }
        })
    }
}

module.exports = new SearchHistoryController();