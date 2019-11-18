const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    result: {
        type: Number,
        required: true
    }
})

mongoose.model('ExpenseModel', ExpenseSchema);