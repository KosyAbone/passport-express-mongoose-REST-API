import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    BooksName: {
        type: String,
        required: 'Enter the title of the book'
    },
    ISBN: {
        type: String,
        required: 'Book must have ISBN'
    },
    Rating: {
        type: Number
    },
    Author: {
        type: String,
        required: 'Enter the author of the book'
    },
    Genre: {
        type: String,
        required: 'Fill in the genre'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

const Book = mongoose.model('Book', BookSchema)
export default Book