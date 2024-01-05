const {Category} = require('../models/models');

class CategoryController {
    async getAll(req, res) {
        return await Category.findAll().then(type => res.json(type));
    }

    async createOne(req, res) {
        const {name} = req.body;
        const category = await Category.create({name});
        return res.json(category);
    }

    async getOne(req, res) {
        const id = Number(req.params.id);
        const category = await Category.findOne({where: {id: id}});
        return res.json(category);
    }

    async updateOne(req, res) {
        const id = Number(req.params.id);
        const {name} = req.body;
        const category = await Category.update({name}, {where: {id: id}});
        return res.json(category);
    }

    async deleteOne(req, res) {
        Category.destroy({
          where: {
            id: req.body.id
          }
        })
    }
}

module.exports = new CategoryController();