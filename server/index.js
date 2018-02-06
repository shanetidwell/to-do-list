const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const toDoController = require('./controllers/list_controller')

const port=3100;
app.use(bodyParser.json())

app.post('/api/toDo', toDoController.create);
app.get('/api/toDo', toDoController.read);
app.put('/api/toDo/:id', toDoController.update);
app.delete('/api/toDo/:id', toDoController.delete)

app.listen(port,()=>{
    console.log("listening on port", port)
})