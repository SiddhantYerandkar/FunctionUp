const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/movies', function (req, res) {
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movies)
})

router.get('/movies/:indexNumber', function (req, res) {
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    const index = req.params.indexNumber
 
    // ERROR HANDLING
    if (index > movies.length) {
        res.send("error: use a valid index ")
    }

    res.send(movies[index])
})

router.get('/films', function (req, res) {
    let films = [{ id: 1, name: "The Shining" },{id: 2,name: "Incendies"},{id: 3,name: "Rang de Basanti"}, {id: 4,name: "Finding Nemo"}]
    
    res.send(films)
})

router.get('/films/:filmId', function (req, res){
    let films = [{ id: 1, name: "The Shining" },{id: 2,name: "Incendies"},{id: 3,name: "Rang de Basanti"}, {id: 4,name: "Finding Nemo"}]
    
    const index = req.params.filmId

    // ERROR HANDLING
    if (index > films.length ) {
        res.send("No movie exists with this id")
    }

    res.send(films[index])
})

module.exports = router;