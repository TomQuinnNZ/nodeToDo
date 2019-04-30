var Todos = require('../models/toDoModel');
var bodyParser = require('body-parser');

module.exports = (app) => {
    
    // Convert the HTTP request body into JSON
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todo/:uname', (request, response) => {

        Todos.find({ username: request.params.uname }, (error, results) => {
            if (error) throw error;

            response.send(todos);
        });
    });

    app.get('/api/todo/:id', (request, response) => {

        Todos.findById({ _id: request.params.id }, (error, todo) => {
            if (error) throw error;

            response.send(todo);
        });
    });

    app.post('/api/todo', (request, response) => {

        if (request.body.id) {
            // update existing
            Todos.findByIdAndUpdate(request.body.id, { todo: request.body.todo, isDone: request.body.isDone, hasAttachment: request.body.hasAttachment }, (error, todo) => {
                if (error) throw error;

                response.send('Todo item updated successfully.');
            });

        }
        else {
            // create new
            var newTodo = Todos({
                username: 'test',
                todo: request.body.todo,
                isDone: request.body.isDone,
                hasAttachment: request.body.hasAttachment
            });

            newTodo.save((error) => {
                if (error) throw error;

                response.send('Todo item created successfully.');
            });
        }
    });

    app.delete('/api/todo', (request, response) => {

        Todos.findByIdAndRemove(request.body.id, (error) => {
            if (error) throw error;

            response.send('Todo item deleted successfully.');
        })
    });
}