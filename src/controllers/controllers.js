import Book from '../models/crsmodel'

//function to add a new book
export const addNewBook = async(req, res) => {
    try{
        let newBook = await Book.create(req.body)
        res.status(200).json(newBook);
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

//function to get all books
export const getAllBooks = async(req, res) => {
    try{
        const allBooks = await Book.find();
        res.status(200).json(allBooks)
    }
    catch (err){
        return res.status(500).json(err)
    }
}

//function to get a book by its id
export const getBookById = async(req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        if(!book) {
           return res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json(book);
    }catch(err){
        return res.status(404).json({message: err.message})
    }
}

//function to update a book
export const updateBook = async(req, res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedBook) {
            return res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json({message: "Book updated successfully", updatedBook});
    }catch(err){
        return res.status(404).json({message: err.message})
    }
}

//create a function to delete a book
export const deleteBook = async(req, res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book) {
            return res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json({message: "Book deleted successfully"});
    }catch(err){
        return res.status(404).json({message: err.message})
    }
}


