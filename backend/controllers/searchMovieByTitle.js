import Movie from "../models/movie.model.js";

const searchMovieByTitle = async (req, res) => {

    // console.log(req.params.title)
    const searchText = req.params.title.split('-');

    const regexPattern = new RegExp(searchText.map(word => `(?=.*\\b${word}\\b)`).join(''), 'i');
    // console.log(regexPattern)

    let movie = await Movie.find({ title: { $regex: new RegExp(regexPattern) } })
    res.status(200).json({ count: movie.length, data: movie })
    res.end()

}

export default searchMovieByTitle