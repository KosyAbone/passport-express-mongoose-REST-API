import express from "express";
import { addNewCourse, getAllCourses, getCourseById } from "../controllers/controllers";

const router = express.Router()

router.get('/', getAllCourses)

router.get('/:id', getCourseById)

router.post('/', addNewCourse)

router.put('/:id', (req,res) => 
    res.send('PUT request is successful')
)

router.delete('/:id', (req,res) => 
    res.send('DELETE request is successful')
)

export default router