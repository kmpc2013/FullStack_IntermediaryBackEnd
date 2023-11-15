import teacherRepository from "../repositories/TeacherRepository.js";

const saveTeacher = (teacherModel) => {
    return teacherRepository.saveTeacher(teacherModel);
}

const getTeacherById = (id) => {
    return teacherRepository.getTeacherById(teacherModel);
}

const getAllTeachers = (teacherModel) => {
    return teacherRepository.getAllTeachers(teacherModel);
}

const deleteTeacherById = (teacherModel) => {
    return teacherRepository.deleteTeacherById(teacherModel);
}

const updateTeacherById = (teacherModel) => {
    return teacherRepository.updateTeacherById(teacherModel);
}

const service = {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    deleteTeacherById,
    updateTeacherById
}

export default service;