const express = require('express')

const routes = express.Router()

const ProductController = require('./controller/ProductController')
// FIRST ROUTE
routes.get('/products', ProductController.getProducts)
routes.post('/products', ProductController.postProducts)

module.exports = routes;