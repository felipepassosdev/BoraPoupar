const express = require('express')

const routes = express.Router()

const ExpenseController = require('./controller/ExpenseController')
// FIRST ROUTE
routes.get('/expenses', ExpenseController.getExpenses)
routes.post('/expenses', ExpenseController.postExpenses)

module.exports = routes;