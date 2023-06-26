const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/NewMovie')
    .then(() => {
        console.log('mongodb connection successful');
    })
    .catch(err => {
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    movie_name: {
        type: String,
        required: true
    },
    movie_actor: {
        type: String,
        required: true
    },
    movie_release: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;


