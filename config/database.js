const mongoose = require('mongoose')

//torna a Promise do Node a promise usada pelo mongoose
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('CONNECTED AT MONGO-DB!')).catch((err) => console.error(err))


