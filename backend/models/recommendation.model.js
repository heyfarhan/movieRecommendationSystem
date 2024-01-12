import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie', // Reference to the Movie model
        required: true
    },
    recommendations: [
        {
            index: {
                type: Number,
                required: true
            },
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie', // Reference to the Movie model
                required: true
            }
        }
    ]
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

export default Recommendation
