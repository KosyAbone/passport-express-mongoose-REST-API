/*
  Filename: crsroutes.js
  Student's Name: Abhijit Singh
  Student ID: 200533462
  Date: 12-10-2023
*/

import express from "express";
import { addNewBook, getAllBooks, getBookById, updateBook, deleteBook, addMultipleBooks } from "../controllers/controllers";
const router = express.Router()

router.get('/', getAllBooks); //route to get all books

router.get('/:id', getBookById); //route to get a book by its ID

router.post('/', addNewBook); //route to add a new book

router.post('/addBooks', addMultipleBooks); //route to add multiple books

router.put('/:id', updateBook); //route to update a book by its ID

router.delete('/:id', deleteBook); //route to delete a book by its ID

export default router