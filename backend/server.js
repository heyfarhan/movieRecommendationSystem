import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'

import connectDb from './db/connectDb.js'

import movieRoutes from './routes/movie.routes.js'
import Movie from './models/movie.model.js'
import authorizationRoutes from './routes/authorization.routes.js'

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


const start = async () => {
    try {
        await connectDb()
        app.listen(PORT, () => {
            console.log(`app running on ${PORT}`)
        })
    }
    catch (error) {
        console.log(`Error in "start" :`)
    }
}

start();

app.get('/api', async (req, res) => {
    res
        .send(
            "<h1>Home - MovieFlix</h1>"
            + "<h2> 1. /search/movie-title : </h2><p>Returns No. of Movies in Search Result and Data Array with All movies as an Object with all the Details</p>"
            + "<h2> 2. /movie/movieId : </h2><p>Returns a Object containing all the Details of the given Movie</p>"

        )

    res.end()
})
app.get('/api/test', async (req, res) => {
    let data = [{
        "id": 44826,
        "recommendations": [{ 'index': 1, 'id': 36825 }, { 'index': 2, 'id': 215918 }, { 'index': 3, 'id': 256962 }, { 'index': 4, 'id': 16441 }, { 'index': 5, 'id': 1930 }, { 'index': 6, 'id': 1590 }, { 'index': 7, 'id': 152747 }, { 'index': 8, 'id': 2013 }, { 'index': 9, 'id': 2755 }, { 'index': 10, 'id': 36584 }]
    }]
    let id = data.id
    // const movieId = await Movie.findOne({ id: id }).select('_id');
    // console.log(data[0].recommendations)
    let recObj = await Promise.all(recommendation.recommendations.map(id => Movie.findOne({ id }).select('_id')))
    for (let rec of data[0].recommendations) {
        console.log(rec.id)
    }

    // console.log(movieId)
    res.end()
})


app.use('/api', movieRoutes)
app.use('/api', authorizationRoutes)


const tempMovie = {
    "adult": false,
    "backdrop_path": "/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
    "belongs_to_collection": {
        "id": 87096,
        "name": "Avatar Collection",
        "poster_path": "/gC3tW9a45RGOzzSh6wv91pFnmFr.jpg",
        "backdrop_path": "/i7wJUZCq3L3cuH5PLum6jqbG0pr.jpg"
    },
    "budget": 237000000,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        }
    ],
    "homepage": "https://www.avatar.com/movies/avatar",
    "id": 19995,
    "imdb_id": "tt0499549",
    "original_language": "en",
    "original_title": "Avatar",
    "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    "popularity": 109.104,
    "poster_path": "/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    "production_companies": [
        {
            "id": 444,
            "logo_path": null,
            "name": "Dune Entertainment",
            "origin_country": "US"
        },
        {
            "id": 574,
            "logo_path": "/iB6GjNVHs5hOqcEYt2rcjBqIjki.png",
            "name": "Lightstorm Entertainment",
            "origin_country": "US"
        },
        {
            "id": 25,
            "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
            "name": "20th Century Fox",
            "origin_country": "US"
        },
        {
            "id": 290,
            "logo_path": "/jrgCuaQsY9ouP5ILZf4Dq4ZOkIX.png",
            "name": "Ingenious Media",
            "origin_country": "GB"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        },
        {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        }
    ],
    "release_date": "2009-12-15",
    "revenue": 2923706026,
    "runtime": 162,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "english_name": "Spanish",
            "iso_639_1": "es",
            "name": "Español"
        }
    ],
    "status": "Released",
    "tagline": "Enter the world of Pandora.",
    "title": "Avatar",
    "video": false,
    "vote_average": 7.574,
    "vote_count": 29936
};

// app.get('/api/insertTemp', async (req, res) => {

//     await Movie.create(tempMovie)
//     console.log("Movie Inserted Successfully")
//     res.send('success:true')

// })