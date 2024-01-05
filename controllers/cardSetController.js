const {CardSet} = require('../models/models');

class CardSetController {
    async getAll(req, res) {
        return await CardSet.findAll().then(type => res.json(type));
    }

    async createOne(req, res) {
        const {name, description, userId, categoryId} = req.body;
        const cardSet = await CardSet.create({name, description, userId, categoryId});
        return res.json(cardSet);
    }

    async getOne(req, res) {
        const id = Number(req.params.id);
        const cardSet = await CardSet.findOne({where: {id: id}});
        return res.json(cardSet);
    }

    async updateOne(req, res) {
        const id = Number(req.params.id);
        const {name, description, userId, categoryId} = req.body;
        const cardSet = await CardSet.update({name, description, userId, categoryId}, {where: {id: id}});
        return res.json(cardSet);
    }

    async deleteOne(req, res) {
        CardSet.destroy({
          where: {
            id: req.body.id
          }
        })
    }
}

module.exports = new CardSetController();