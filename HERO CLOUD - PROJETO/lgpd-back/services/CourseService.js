import courseRepository from "../repositories/CourseRepository.js";

const saveCourse = (courseModel) => {
    return courseRepository.saveCourse(courseModel);
}

const getCourseById = (id) => {
    return courseRepository.getCourseById(courseModel);
}

const getAllCourses = (courseModel) => {
    return courseRepository.getAllCourses(courseModel);
}

const deleteCourseById = (courseModel) => {
    return courseRepository.deleteCourseById(courseModel);
}

const updateCourseById = (courseModel) => {
    return courseRepository.updateCourseById(courseModel);
}

const service = {
    saveCourse,
    getCourseById,
    getAllCourses,
    deleteCourseById,
    updateCourseById
}

export default service;