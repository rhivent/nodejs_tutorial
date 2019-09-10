var express = require('express');
var router = express.Router();

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

module.exports = router;
