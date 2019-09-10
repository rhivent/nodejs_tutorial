import express from "express";
const router = express.Router();
//Models
import User from '../models/User';
import Task from '../models/Task';
import { isNumeric, isEmpty, isBoolean, 
  isInt, toDate, isURL, isEmail } from 'validator';

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
//Register user
router.post('/register', async (req, res) => {
  //User should secure password before sending 
  let { name,password,email,profileURL,gender,dob } = req.body;
  //console.log(`name: ${name}, password=${password},email=${email}, profileURL=${profileURL},gender=${gender}, dob=${dob}`);
  if (isEmpty(name) || isEmpty(password) 
    || !isEmail(email) || !isURL(profileURL)
    || isEmpty(gender) || toDate(dob) === null) {
    res.json({
      result: 'failed',
      data: {},
      message: `name, password, gender must not be empty. Email,profileURL,dob must be in correct format`
    });
    return;
  }    
  try {
    let newUser = await User.create({
      name,
      password,
      email,
      profileurl: profileURL,
      gender,
      dob,
    }, {
        fields: ["name","password", "email","profileurl","gender","dob"]
      });
    if (newUser) {
      res.json({
        result: 'ok',
        data: newUser,
        message: `Insert a new User successfully`
      });
    } else {
      res.json({
        result: 'failed',
        data: {},
        message: `Insert a new User failed`
      });
    }
  } catch (error) {
    res.json({
      result: 'failed',
      data: {},
      message: `Insert a new User failed. Error: ${error}`
    });
  }
});
//Login user
router.post('/login', async (req, res) => {
  let { name, email } = req.body;
  //console.log(`name: ${name}, password=${password},email=${email}, profileURL=${profileURL},gender=${gender}, dob=${dob}`);
  if (isEmpty(name) || !isEmail(email)) {
    res.json({
      result: 'failed',
      data: {},
      message: `name must not be empty. Email must be in correct format`
    });
    return;
  }
  try {    
    let users = await User.findAll({
      attributes: ["name", "password", "email", "profileurl", "gender", "dob"],
      where: {
        name,
        email
      }      
    });
    
    if (users.length > 0) {
      res.json({
        result: 'ok',
        data: users[0],
        message: `Query user successfully`
      });
    } else {
      res.json({
        result: 'failed',
        data: {},
        message: `Cannot find user, check your name and email`
      });
    }
  } catch (error) {
    res.json({
      result: 'failed',
      data: {},
      message: `Insert a new User failed. Error: ${error}`
    });
  }
});

export default router;
