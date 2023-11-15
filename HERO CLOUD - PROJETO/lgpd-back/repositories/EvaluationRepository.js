import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (EvaluationModel) => {
    const save = await Evaluation.create(EvaluationModel);
    return save;
}

const getAllEvaluations = async () => {
    const save = await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const getEvaluationById = async () => {
    const save = await Evaluation.findByPk(id);
};

const deleteEvaluationById = async () => {
    const save = await Evaluation.destroy({where: { id: id}});
};

const updateEvaluationsById = async (id, EvaluationModel) => {
    try {
        const result = await Evaluation.update(EvaluationModel, {where: { id: id}});
        if (result[0]===1) {
            return { message: "Evaluation updated with success"};
        } else {
            return { message: "can not find ${id} to udpate", status: 404}
        }
    } catch (error) {
        console.error();
    }
};

const factory = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationsById
}

export default factory;