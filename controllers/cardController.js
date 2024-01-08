const {Card} = require('../models/models');

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
        return res.json(card);
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