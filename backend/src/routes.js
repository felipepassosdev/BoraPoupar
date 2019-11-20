const express = require('express')

const routes = express.Router()

const ExpenseController = require('./controller/ExpenseController')
const MoneyController = require('./controller/MoneyController')
// FIRST ROUTE
routes.get('/expenses', ExpenseController.getExpenses)
routes.post('/expenses', ExpenseController.postExpenses)

routes.get('/money', MoneyController.getMoney)
routes.post('/money', MoneyController.postMoney)

module.exports = routes;