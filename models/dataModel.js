const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    contant: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Data = mongoose.model('Data', dataSchema);
module.exports = Data;
