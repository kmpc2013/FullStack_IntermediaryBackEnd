import User from "../models/User.js";

const saveUser = async (UserModel) => {
    const save = await User.create(UserModel);
    return save;
}

const getAllUsers = async () => {
    const save = await User.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const getUserById = async () => {
    const save = await User.findByPk(id);
};

const deleteUserById = async () => {
    const save = await User.destroy({where: { id: id}});
};

const updateUsersById = async (id, UserModel) => {
    try {
        const result = await User.update(UserModel, {where: { id: id}});
        if (result[0]===1) {
            return { message: "User updated with success"};
        } else {
            return { message: "can not find ${id} to udpate", status: 404}
        }
    } catch (error) {
        console.error();
    }
};

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUsersById
}

export default factory;
