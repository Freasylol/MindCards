const {Card, UserLog} = require('../models/models');

class CardController {
    async getAll(req, res) {
        // const orderedList = await models.YourModel.findAll({
        //     order: [['id', 'ASC']], // Сортировка по возрастанию id
        //   });
      
        return await Card.findAll({
            order: [['id', 'ASC']],
        }
        ).then(type => res.json(type));
    }

    async getCardsByCardSet(req, res) {
        const cardSetId = Number(req.params.cardSetId)
        const card = await Card.findAll({
            where: {
                cardSetId: cardSetId
            },
            order: [['id', 'ASC']]
        })
        return res.json(card);
    }

    async createOne(req, res) {
        const {task, answer, cardSetId} = req.body;
        const card = await Card.create({task, answer, cardSetId});
        // const today = new Date();
        // const year = today.getFullYear();
        // const month = String(today.getMonth() + 1).padStart(2, '0');
        // const day = String(today.getDate()).padStart(2, '0');
        // const formattedDate = `${year}-${month}-${day}`;
        // const userLog = await UserLog.create({date: formattedDate, action: `User ${card.data.userId} created cardSet`, userId: card.data.userId});
        return res.json(card);
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
        const card = await Card.findOne({where: {id: id}});
        return res.json(card);
    }

    async updateOne(req, res) {
        const id = Number(req.params.id);
        const {task, answer, cardSetId} = req.body;
        const card = await Card.update({task, answer, cardSetId}, {where: {id: id}});
        return res.json(card);
    }

    async deleteOne(req, res) {
        Card.destroy({
          where: {
            id: req.body.id
          }
        })
    }
}

module.exports = new CardController();