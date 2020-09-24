var express = require('express');
var router = express.Router();
var connection = require('../db');

/* GET blog posts listing. */
router.get('/', (req, res, next) => {
  connection.query('SELECT * from posts', (err, results, fields) => {
    if (err) throw err;
    res.send(JSON.stringify(results));
  });
});

// GET the Latest blog post
router.get('/latest', (req, res) => {
  console.log('get latest')
  connection.query(`SELECT * from posts ORDER BY id DESC LIMIT 1`, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify(results));
  });
});

// GET a single blog post
router.get('/:id', (req, res) => {
  var id = req.params.id
  connection.query(`SELECT * from posts WHERE id=${id}`, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify(results));
  })
});

// UPDATE a single blog post
router.put('/:id', (req, res) => {
  connection.query(`UPDATE posts SET title = "${req.body.title}", content = "${req.body.content}"
                        WHERE id = ${req.params.id}`, (err, results) => {
    if (err) throw err;
  })
})

// POST blog post
router.post('/', (req, res) => {
  var blog = req.body;
  connection.query(`INSERT INTO posts (title, content) VALUES ("${blog.title}", "${blog.content}")`, (err, results) => {
    if (err) throw err;
  })
});

// DELETE a blog post
router.delete('/', (req, res) => {
  var id = req.body.id;
  connection.query(`DELETE FROM posts WHERE id=${id}`, (err, results) => {
    if (err) throw err;
  })
});

module.exports = router;
