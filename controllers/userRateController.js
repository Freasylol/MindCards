const {UserRate} = require('../models/models');

class UserRateController {
    async getAll(req, res) {
        return await UserRate.findAll().then(type => res.json(type));
    }

    async createOne(req, res) {
        const {grade, userId, cardSetId} = req.body;
        const userRate = await UserRate.create({grade, userId, cardSetId});
        return res.json(userRate);
    }

    async getOne(req, res) {
        const id = Number(req.params.id);
        const userRate = await UserRate.findOne({where: {id: id}});
        return res.json(userRate);
    }

    async updateOne(req, res) {
        const id = Number(req.params.id);
        const {grade, userId, cardSetId} = req.body;
        const userRate = await UserRate.update({grade, userId, cardSetId}, {where: {id: id}});
        return res.json(userRate);
    }

    async deleteOne(req, res) {
        UserRate.destroy({
          where: {
            id: req.body.id
          }
        })
    }
}

module.exports = new UserRateController();