import express from "express";
const router = express.Router();
//Models
import Todo from '../models/Todo';
import Task from '../models/Task';
import { isNumeric, isEmpty, isBoolean, isInt, toDate } from 'validator';

//Insert
router.post('/', async (req, res) => {
    let { name, priority, description, duedate } = req.body;    
    if (isEmpty(name) || !isInt(priority, { min: 0, max: 2 })
         || toDate(duedate)===null) {
        res.json({
            result: 'failed',
            data: {},
            message: `name must not be empty,priority=0..2 dueDate must be yyyy-mm-dd`
        });
        return;
    }    
    try {
        let newTodo = await Todo.create({
            name,
            priority: parseInt(priority),
            description,
            duedate
        },{
                fields: ["name", "priority", "description", "duedate"]
        });
        if(newTodo) {
            res.json({
                result: 'ok',
                data: newTodo
            });
        } else {
            res.json({
                result: 'failed',
                data: {},
                message: `Insert a new Todo failed`
            });
        }
    } catch(error) {
        res.json({
            result: 'failed',
            data: {},
            message: `Insert a new Todo failed. Error: ${error}`
        });
    }    
});
//Update data in DB
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const { name, priority, description, duedate } = req.body;
    if (!isNumeric(id)) {
        res.json({
            result: 'failed',
            data: {},
            message: `id must be a number`
        });
        return;
    }
    try {
        let todos = await Todo.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'duedate'],
            where: {
                id
            }
        });
        if(todos.length > 0) {
            todos.forEach(async (todo) => {
              await todo.update({
                  name: name ? name : todo.name,
                  priority: priority ? priority : todo.priority,
                  description: description ? description : todo.description,
                  duedate: duedate ? duedate : todo.duedate
              });  
            });
            res.json({
                result: 'ok',
                data: todos,
                message: "update a Todo successfully"
            });
        } else {
            res.json({
                result: 'failed',
                data: {},
                message: "Cannot find Todo to update"
            });
        }
    } catch(error) {
        res.json({
            result: 'failed',
            data: {},
            message: `Cannot update a Todo. Error: ${error}`
        });
    }
});
//Delete a Todo
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    if (!isNumeric(id)) {
        res.json({
            result: 'failed',
            data: {},
            message: `id must be a number`
        });
        return;
    }
    try {
        await Task.destroy({
            where: {
                todoid: id
            }
        });
        let numberOfDeletedRows = await Todo.destroy({
            where: {
                id
            }
        });
        res.json({
            result: 'ok',
            message: "Delete a Todo successfully",
            count: numberOfDeletedRows
        });	
    } catch (error) {
        res.json({
            result: 'failed',
            data: {},
            message: `Delete a Todo failed. Error: ${error}`
        });
    }
});
//Query all data from DB
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'duedate'],		
        });
        res.json({
            result: 'ok',
            data: todos,
            length: todos.length,
            message: "query list of Todos successfully"
        });
    } catch (error) {
        res.json({
            result: 'failed',
            data: [],
            length: 0,
            message: `query list of Todos failed. Error: ${error}`
        });
    }	
});
//Get by Id ?
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (!isNumeric(id)) {
        res.json({
            result: 'failed',
            data: {},
            message: `id must be a number`
        });
        return;
    }
    try {
        let todos = await Todo.findAll({
            attributes: ['name', 'priority', 'description', 'duedate'],
            where: {
                id: id
            },
            include: {
                model: Task,
                as: 'tasks',
                required: false
            }
        });
        if (todos.length > 0) {
            res.json({
                result: 'ok',
                data: todos[0],
                message: "query list of Todos successfully"
            });
        } else {
            res.json({
                result: 'failed',
                data: {},
                message: "Cannot find Todo to show"
            });
        }
    } catch (error) {
        res.json({
            result: 'failed',
            data: {},
            message: `query list of Todos(by id) failed. Error: ${error}`
        });
    }
});

export default router;