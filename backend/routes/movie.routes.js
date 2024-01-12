import express from 'express'

const router = express.Router()

import getMovieDetails from '../controllers/getMovieDetails.controller.js'
import searchMovieByTitle from '../controllers/searchMovieByTitle.js'
import getRecommendations from '../controllers/recommendMovies.controller.js'

router.route('/movie/:id')
    .get(getMovieDetails)

router.route('/search/:title')
    .get(searchMovieByTitle)
router.route('/recommend/:id')
    .get(getRecommendations)



export default router