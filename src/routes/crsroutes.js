import express from "express";
import { addNewBook, getAllBooks, getBookById, updateBook, deleteBook } from "../controllers/controllers";
const router = express.Router()

router.get('/', getAllBooks);

router.get('/:id', getBookById);

router.post('/', addNewBook)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

export default router