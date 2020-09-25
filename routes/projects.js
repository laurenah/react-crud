var express = require('express');
var router = express.Router();
var connection = require('../db');

/* GET projects listing. */
router.get('/', (req, res, next) => {
    connection.query('SELECT * from projects', (err, results, fields) => {
        if (err) throw err;
        res.send(JSON.stringify(results));
    });
});


// GET a single project
router.get('/:id', (req, res) => {
    var id = req.params.id
    connection.query(`SELECT * from projects WHERE id=${id}`, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify(results));
    })
});

// UPDATE a single project
router.put('/:id', (req, res) => {
    connection.query(`UPDATE projects SET name = "${req.body.name}", description = "${req.body.description}"
                          WHERE id = ${req.params.id}`, (err, results) => {
        if (err) throw err;
    })
})

// POST project
router.post('/', (req, res) => {
    var project = req.body;
    connection.query(`INSERT INTO projects (name, description) VALUES ("${project.name}", "${project.description}")`, (err, results) => {
        if (err) throw err;
    })
});

// DELETE a project
router.delete('/', (req, res) => {
    var id = req.body.id;
    connection.query(`DELETE FROM projects WHERE id=${id}`, (err, results) => {
        if (err) throw err;
    })
});

module.exports = router;