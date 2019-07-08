const mongoose = require('mongoose');
mongoose.connect(process.env.Port ||'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports={mongoose};
