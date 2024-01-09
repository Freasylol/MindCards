const {BrowsingHistory} = require('../models/models');

class BrowsingHistoryController {
    async getAll(req, res) {
        return await BrowsingHistory.findAll().then(type => res.json(type));
    }

    async findByUserId(req, res) {
        const userId = Number(req.params.userId);
        const browsingHistory = await BrowsingHistory.findAll({
            where: {
                userId: userId
            }
        })
        return res.json(browsingHistory);
    }

    async createOne(req, res) {
        const {userId, cardSetId} = req.body;
        console.log(req.body);
        console.log({userId, cardSetId});
        const browsing_history = await BrowsingHistory.create({userId, cardSetId});
        return res.json(browsing_history);
    }

    async getOne(req, res) {
        const id = Number(req.params.id);
        const browsing_history = await BrowsingHistory.findOne({where: {id: id}});
        return res.json(browsing_history);
    }

    async updateOne(req, res) {
        const id = Number(req.params.id);
        const {name} = req.body;
        const browsing_history = await BrowsingHistory.update({userId, cardSetId}, {where: {id: id}});
        return res.json(browsing_history);
    }

    async deleteOne(req, res) {
        BrowsingHistory.destroy({
          where: {
            id: req.body.id
          }
        })
    }
}

module.exports = new BrowsingHistoryController();