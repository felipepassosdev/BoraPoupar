const mongoose = require('mongoose')

const MoneyModel = mongoose.model('MoneyModel')

module.exports = {
    async getMoney(req, res) {
        const money = await MoneyModel.find()

        return res.json(money)
    },

    async postMoney(req, res) {
        const money = await MoneyModel.create(req.body)

        return res.json(money)
    }
}