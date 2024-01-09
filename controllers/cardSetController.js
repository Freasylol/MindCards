const {CardSet} = require('../models/models');

class CardSetController {
    async getAll(req, res) {
        return await CardSet.findAll().then(type => res.json(type));
    }

    async changeCardSetName(req, res) {
        const id = Number(req.params.id);
        const {name} = req.body;
        const cardSet = await CardSet.update({name}, {where: {id: id}}); 
        return res.json(cardSet);    
    }

    async createOne(req, res) {
        const {name, description, userId, categoryId} = req.body;
        const cardSet = await CardSet.create({name, description, userId, categoryId});
        return res.json(cardSet);
    }
    
    async findByUserId(req, res) {
        const userId = Number(req.params.userId);
        const cardSet = await CardSet.findAll({
            where: {
                userId: userId
            }
        })
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
        const id = Number(req.params.id);
        const cardSet = CardSet.destroy({
          where: {id: id},
          cascade: true
        })
        return res.json(cardSet);
    }
}

module.exports = new CardSetController();