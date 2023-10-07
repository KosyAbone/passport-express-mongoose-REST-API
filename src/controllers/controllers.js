import Course from '../models/crsmodel'

export const addNewCourse = async(req, res) => {
    try{
        let newCourse = new Course(req.body)
        await newCourse.save()
        res.status(200).json(newCourse);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const getAllCourses = async(req, res) => {
    try{
        const allCourses = await Course.find();
        res.status(200).json(allCourses)
    }
    catch (err){
        res.status(500).json(err)
    }
}

export const getCourseById = async(req, res) => {
    try{
        const course = await Course.findById({_id: req.params.id})
        if(!course) {
           return res.status(404).json({message: "Course Not Found"})
        }
        res.status(200).json(course);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}