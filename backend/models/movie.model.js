import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({

    adult: Boolean,
    backdrop_path: String,
    belongs_to_collection: {
        id: Number,
        name: String,
        poster_path: String,
        backdrop_path: String,
    },
    // budget: Number,
    genres: [{
        id: Number,
        name: String,

    }],
    homepage: String,
    id: {
        type: Number,
        required: true,
        default: '0'
    },
    imdb_id: {
        type: String,
        required: true,
        default: '0'
    },
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    production_companies: [
        {
            id: Number,
            logo_path: String,
            name: String,
            origin_country: String,
        }
    ],
    // production_countries: [
    //     {
    //         iso_3166_1: String,
    //         name: String,
    //     },
    // ],
    release_date: String,
    // revenue: String,
    runtime: Number,
    spoken_languages: [
        {
            english_name: String,
            iso_639_1: String,
            name: String
        },
    ],
    status: String,
    tagline: String,
    title: {
        type: String,
        required: true,
        default: '0'
    },
    video: Boolean,
    vote_average: Number,
    vote_count: Number,

})

const Movie = mongoose.model("Movie", movieSchema)

export default Movie