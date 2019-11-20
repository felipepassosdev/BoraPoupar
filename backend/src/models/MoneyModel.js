const mongoose = require('mongoose')

const MoneySchema = new mongoose.Schema({
    spent: {
        type: String,
        required: true
    },
    spared: {
        type: String,
        required: true
    },
    income : {
        type: String,
        required: true
    }
})

mongoose.model('MoneyModel', MoneySchema);