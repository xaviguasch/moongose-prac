const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true }); 

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

const Cat = mongoose.model('Cat', catSchema)
// adding a new cat to the DB



// retrieve all cats from the DB and console.log each one