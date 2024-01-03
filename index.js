const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dataroute = require('./routes/dataroute');

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/assingment', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use('/api/a', dataroute);

app.listen(8080, () => {
    console.log('Server is running on port number 8080');
});
