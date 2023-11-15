import evaluationRepository from "../repositories/EvaluationRepository.js";

const saveEvaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation(evaluationModel);
}

const getEvaluationById = (id) => {
    return evaluationRepository.getEvaluationById(evaluationModel);
}

const getAllEvaluations = (evaluationModel) => {
    return evaluationRepository.getAllEvaluations(evaluationModel);
}

const deleteEvaluationById = (evaluationModel) => {
    return evaluationRepository.deleteEvaluationById(evaluationModel);
}

const updateEvaluationById = (evaluationModel) => {
    return evaluationRepository.updateEvaluationById(evaluationModel);
}

const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluations,
    deleteEvaluationById,
    updateEvaluationById
}

export default service;