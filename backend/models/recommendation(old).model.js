import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema(
  {

    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    },
    recommendations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    }]

  }
)




const Recommendation = mongoose.model('Recommendation', recommendationSchema);

export default Recommendation
