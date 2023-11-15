import Courses from "./Course";
import Evaluation from "./Evaluation";
import User from "./User";

const associations = () => {
    Courses.hasMany(Teacher);
    User.hasMany(Evaluation);
    Courses.hasMany(Evaluation);
}

const factory = {
    associations
}

export default factory;