const express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(404).send({ error: 'Page not found', name: 'Todo app v1.0' });
});

app.get('/users', (req,res) => {
    var users = [{
            name: 'John',
            age: 25
        },
        {
            name: 'Jane',
            age: 18
        },
        {
            name: 'Kostya',
            age: 36
        }
    ];
    res.send(users);
});

app.listen(port);

module.exports.app = app;