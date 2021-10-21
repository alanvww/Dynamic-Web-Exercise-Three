const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send(`
    <h1>Homepage</h1>
    <p>Hi</p>
    `);
});

module.exports = router;
