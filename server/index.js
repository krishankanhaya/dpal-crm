const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.get('/', (req, res)=> {
    res.status(200).send('This is server homepage')
})

app.listen(5000, ()=> {
    console.log('Server started on port number 50000...')
})