var Todos = require('../models/toDoModel');

module.exports = (app) => {

    app.get('/api/setupTodos', (request, response) => {

        // seed data for DB
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed cats',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Do dishes',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, (error, results) => {
            response.send(results);
        });
    });
}