const mongoose = require('mongoose')

const ExpenseModel = mongoose.model('ExpenseModel')

module.exports = {
    async getExpenses(req, res) {
        const expense = await ExpenseModel.find()

        return res.json(expense)
    },

    async postExpenses(req, res) {
        const expense = await ExpenseModel.create(req.body)

        return res.json(expense)
    }
}