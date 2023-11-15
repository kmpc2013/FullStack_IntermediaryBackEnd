import Teacher from "../models/Teacher.js";

const saveTeacher = async (TeacherModel) => {
    const save = await Teacher.create(TeacherModel);
    return save;
}

const getAllTeachers = async () => {
    const save = await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const getTeacherById = async () => {
    const save = await Teacher.findByPk(id);
};

const deleteTeacherById = async () => {
    const save = await Teacher.destroy({where: { id: id}});
};

const updateTeachersById = async (id, TeacherModel) => {
    try {
        const result = await Teacher.update(TeacherModel, {where: { id: id}});
        if (result[0]===1) {
            return { message: "Teacher updated with success"};
        } else {
            return { message: "can not find ${id} to udpate", status: 404}
        }
    } catch (error) {
        console.error();
    }
};

const factory = {
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    deleteTeacherById,
    updateTeachersById
}

export default factory;