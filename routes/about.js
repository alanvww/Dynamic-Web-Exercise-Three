const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send(`
    <h1>About Page</h1>
    <p>Hi</p>
    `);
});

router.get('/me', (req, res) => {
	res.send(`
    <h1>About Me</h1>
    <p>Hi</p>
    `);
});

module.exports = router;
