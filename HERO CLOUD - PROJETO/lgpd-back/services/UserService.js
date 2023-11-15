import userRepository from "../repositories/UserRepository.js";

const saveUser = (userModel) => {
    return userRepository.saveUser(userModel);
}

const getUserById = (id) => {
    return userRepository.getUserById(userModel);
}

const getAllUsers = (userModel) => {
    return userRepository.getAllUsers(userModel);
}

const deleteUserById = (userModel) => {
    return userRepository.deleteUserById(userModel);
}

const updateUserById = (userModel) => {
    return userRepository.updateUserById(userModel);
}

const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
}

export default service;