import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Enter your name'
    },
    programName: {
        type: String,
        required: 'Enter your program name'
    },
    college: {
        type: String
    },
    collegeContact: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

const Course = mongoose.model('Course', courseSchema)
export default Course