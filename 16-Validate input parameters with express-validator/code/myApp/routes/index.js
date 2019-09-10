/**
 * You can see detail of these code lines in video "Express and router" in my video playlist
 */

var express = require('express');
var router = express.Router();
let util = require('util');

/* GET home page. */
router.get('/', (request, response, next) => {
    response.render('index', {title: 'My tutorial videos'});
});

router.get('/list_all_foods', (request, response, next) => {
    response.end("GET requested => list_all_foods");
});

router.post('/insert_new_food', (request, response, next) => {
    response.end("POST requested => insert_new_food");
});

router.put('/update_a_food', (request, response, next) => {
    response.end("PUT requested => update_a_food");
});

router.delete('/delete_a_food', (request, response, next) => {
    response.end("DELETE requested => delete_a_food");
});

//Test for express-validator
router.get('/test_validator', (request, response, next) => {
    request.checkQuery('page', '"page" must be Int, not empty, >= 0').notEmpty().isInt().greaterThanOrEqual(0);
    request.checkQuery('limit', '"limit" must be Int, not empty, <= 1000').notEmpty().isInt().lessThanOrEqual(1000);
    request.sanitize('address').convertToUpperCase();

    request.getValidationResult().then((validationResult) => {
        if (!validationResult.isEmpty()) {
            response.json({
                result: "failed",
                messege: `Validation errors:  ${util.inspect(validationResult.array())}`
            });
            return;
        }
        //Do some other tasks
        response.json({
            result: "ok",
            messege: `Validate input successfully. Input params = ${util.inspect(request.query)}`
        });
    });
});

router.post('/test_validator', (request, response, next) => {
    request.checkBody('email', '"email" is not in correct format').notEmpty().isEmail();
    request.getValidationResult().then((validationResult) => {
        if (!validationResult.isEmpty()) {
            response.json({
                result: "failed",
                messege: `Validation errors:  : ${util.inspect(validationResult.array())}`
            });
            return;
        }
        //Do some other tasks
        response.json({
            result: "ok",
            messege: `Validate input successfully. Input params = ${util.inspect(request.body)}`
        });
    });
});
module.exports = router;
