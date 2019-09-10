import Sequelize  from 'sequelize';
import { sequelize, Op } from '../databases/database';

const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    todoid: {
        type: Sequelize.INTEGER
    },
    isfinished: {
        type: Sequelize.BOOLEAN
    }
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
});
export default Task;