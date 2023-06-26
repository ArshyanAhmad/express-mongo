const Router = require('express').Router()
const Movie = require('../mongoose/mongoose')

console.log(Movie);

Router.get('/', (req, res) => {
    res.render('index')
})

Router.post('/mongo/v1', (req, res) => {

    let movie_name = req.body.movie_name
    let movie_actor = req.body.actor_name
    let movie_release = req.body.release_date
    let active = req.body.active

    if (movie_name === '' || movie_actor === '' || movie_release === '' || active === '') {
        res.json({ message: 'Plz full the form properly' })
    }
    else {
        res.json(req.body)

        const movie2 = new Movie({
            movie_name: movie_name,
            movie_actor: movie_actor,
            movie_release: movie_release,
            active: active,
        })

        movie2.save()
            .then(() => {
                console.log('save success');
            })
            .catch(err => {
                console.log(err);
            })

    }

})

module.exports = Router;