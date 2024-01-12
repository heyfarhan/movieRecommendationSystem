import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'

import connectDb from './connectDb.js'

import Movie from '../models/movie.model.js'
import Recommendation from '../models/recommendation.model.js'

import Movies from '../data/data.json' assert { type: 'json' };
import recommendationData from '../data/recommendations.json' assert { type: 'json' };

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
        console.log(`Error in "start" : ${error}`)
    }
}

start();




async function uploadRecommendations() {
    let i = 0;
    try {
        for (const recommendation of recommendationData) {

            const movie = await Movie.findOne({ id: recommendation.id });
            if (!movie) {
                console.error(`Movie with ID ${recommendation.id} not found`);
                continue;
            }

            const recommendationsArray = Array.isArray(recommendation.recommendations)
                ? await Promise.all(recommendation.recommendations.map(async (rec) => {
                    const recMovie = await Movie.findOne({ id: rec.id });
                    if (!recMovie) {
                        console.error(`Movie with ID ${rec.id} not found`);
                        return null;
                    }
                    return { index: rec.index, id: recMovie._id };
                }))
                : [];

            const filteredRecommendationsArray = recommendationsArray.filter(rec => rec !== null);

            const recommendationObject = new Recommendation({
                id: movie._id,
                recommendations: filteredRecommendationsArray,
            });

            await recommendationObject.save();
            console.log(i++);
        }

        console.log('Recommendations uploaded successfully');
    } catch (error) {
        console.error('Error uploading recommendations:', error);
    }
}


// async function uploadRecommendations() {
//     try {
//         for (const recommendation of recommendationData) {
//             const movieId = await Movie.findOne({ id: recommendation.id }).select('_id');
//             const recommendationObject = new Recommendation({
//                 id: movieId,
//                 recommendations: await Promise.all(recommendation.recommendations.map(id => Movie.findOne({ id }).select('_id'))),
//             });

//             await recommendationObject.save();
//         }

//         console.log('Recommendations uploaded successfully');
//     } catch (error) {
//         console.error('Error uploading recommendations:', error);
//     }
// }

app.get('/api/insertAll', async (req, res) => {
    await Movie.deleteMany()
    await Recommendation.deleteMany()
    await Movie.insertMany(Movies)
    uploadRecommendations()
    console.log("Inserted Successfully")
    res.json('{success:true}')
    res.end()

})