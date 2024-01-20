const {UserRate, UserLog} = require('../models/models');

class UserRateController {
    async getAll(req, res) {
        return await UserRate.findAll().then(type => res.json(type));
    }

    async getCardsByCardSet(req, res) {
        const cardSetId = Number(req.params.cardSetId)
        const userRate = await UserRate.findAll({
            where: {
                cardSetId: cardSetId
            },
            order: [['id', 'ASC']]
        })
        return res.json(userRate);
    }

    async createOne(req, res) {
        const {grade, userId, cardSetId} = req.body;
        const userRate = await UserRate.create({grade, userId, cardSetId});
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const userLog = await UserLog.create({date: formattedDate, action: `User ${userId} created new userRate`, userId});
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
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const userLog = await UserLog.create({date: formattedDate, action: `User ${userId} updated new userRate`, userId});
        return res.json(userRate);
    }

    async deleteOne(req, res) {
        const userRate = UserRate.destroy({
          where: {
            id: req.body.id
          }
        })
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const userLog = await UserLog.create({date: formattedDate, action: `User ${userRate.data.userId} created new userRate`, userId: userRate.data.userId});
    }
}

module.exports = new UserRateController();