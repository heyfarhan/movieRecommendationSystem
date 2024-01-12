import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Successfully connected to database")
    }
    catch (error) {
        console.log(`Error Occured in "connectDb"`)
    }
}

export default connectDb;