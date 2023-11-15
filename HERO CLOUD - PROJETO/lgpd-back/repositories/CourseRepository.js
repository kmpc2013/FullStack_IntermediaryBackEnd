import Course from "../models/Course.js";

const saveCourse = async (CourseModel) => {
    const save = await Course.create(CourseModel);
    return save;
}

const getAllCourses = async () => {
    const save = await Course.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const getCourseById = async () => {
    const save = await Course.findByPk(id);
};

const deleteCourseById = async () => {
    const save = await Course.destroy({where: { id: id}});
};

const updateCoursesById = async (id, CourseModel) => {
    try {
        const result = await Course.update(CourseModel, {where: { id: id}});
        if (result[0]===1) {
            return { message: "Course updated with success"};
        } else {
            return { message: "can not find ${id} to udpate", status: 404}
        }
    } catch (error) {
        console.error();
    }
};

const factory = {
    saveCourse,
    getAllCourses,
    getCourseById,
    deleteCourseById,
    updateCoursesById
}

export default factory;