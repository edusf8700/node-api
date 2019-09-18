const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi');

requireDir('./src/models');
const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Built native apps with react',
        url: 'http://github.com/facebook/react-native',
    });
    res.send('Hello');
});

app.listen(3001);
