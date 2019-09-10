//Do the same as Task
import Sequelize from 'sequelize';
import { sequelize, Op } from '../databases/database';
import Task from './Task';

const Todo = sequelize.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    priority: {
        type: Sequelize.TINYINT
    },
    description: {
        type: Sequelize.TEXT
    },
    duedate: {
        type: Sequelize.DATE
    }
}, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
    });
Todo.hasMany(Task, { foreignKey: 'todoid', sourceKey: 'id' });
Task.belongsTo(Todo, { foreignKey: 'todoid', targetKey: 'id' });

export default Todo;