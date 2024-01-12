import Movie from "../models/movie.model.js";

const getMovieDetails = async (req, res) => {

    let movieId = parseInt(req.params.id);
    let movie = await Movie.findOne({ id: movieId })
    res.status(200).json(movie)
    res.end()

}

export default getMovieDetails