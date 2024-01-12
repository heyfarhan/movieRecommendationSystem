import Movie from "../models/movie.model.js";
import Recommendation from "../models/recommendation.model.js";




const getRecommendations = async (req, res) => {
    try {
        const movieId = req.params.id;

        // Find the movie by ID
        const movie = await Movie.findOne({ id: movieId });

        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        // Find the recommendations for the movie
        const recommendations = await Recommendation.findOne({ id: movie._id }).populate('id recommendations.id');

        if (!recommendations) {
            return res.status(404).json({ message: 'Recommendations not found for the movie' });
        }

        res.status(200).json(recommendations);
    } catch (error) {
        console.error('Error getting recommendations:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default getRecommendations;


