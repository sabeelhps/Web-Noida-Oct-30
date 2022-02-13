const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/movie-app')
    .then(() => console.log("CONNECTION OPEN!!"))
    .catch((err) => console.log("CONNECTION FAILED", err));




// It maps different documents comming from mongodb into different types in js
const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    isWatched: Boolean
});

// JS Class
const Movie = mongoose.model('Movie', movieSchema);


// const ironman = new Movie({name:'Ironman',year:2013,rating:7});


// // this actually saves the document in the database
// ironman.save()
//     .then((m) => console.log(m))
//     .catch((err) => console.log(err));



const DUMMY_MOVIES = [
    {
        name: 'Fast and Furious',
        year: 2012,
        rating: 7,
        isWatched:false
    },
    {
        name: 'Mission Impossible',
        year: 2013,
        rating: 8,
        isWatched:true
    },
    {
        name: 'Intersteller',
        year: 2014,
        rating: 8,
        isWatched:true
    }
];



Movie.insertMany(DUMMY_MOVIES)
.then((m)=>console.log(m))


