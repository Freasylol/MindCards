const {FavoriteCardSet} = require('../models/models');

class FavoriteCardSetController {
    async getAll(req, res) {
        return await FavoriteCardSet.findAll().then(type => res.json(type));
    }

    async findByUserId(req, res) {
        const userId = Number(req.params.userId);
        const favoriteCardSet = await FavoriteCardSet.findAll({
            where: {
                userId: userId
            }
        })
        return res.json(favoriteCardSet);
    }

    async createOne(req, res) {
        const {cardSetId, userId} = req.body;
        const favoriteCardSet = await FavoriteCardSet.create({cardSetId, userId});
        return res.json(favoriteCardSet);
    }

    async getOne(req, res) {
        const id = Number(req.params.id);
        const favoriteCardSet = await FavoriteCardSet.findOne({where: {id: id}});
        return res.json(favoriteCardSet);
    }

    async updateOne(req, res) {
        const id = Number(req.params.id);
        const {cardSetId, userId} = req.body;
        const favoriteCardSet = await FavoriteCardSet.update({cardSetId, userId}, {where: {id: id}});
        return res.json(favoriteCardSet);
    }

    async deleteOne(req, res) {
        FavoriteCardSet.destroy({
          where: {
            id: req.body.id
          }
        })
    }
}

module.exports = new FavoriteCardSetController();