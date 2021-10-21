const express = require('express');
const app = express();

const homePage = require('./routes/index.js');
const aboutPage = require('./routes/about.js');
const port = 3000;

app.use(express.static('public'));

app.use('/', homePage);
app.use('/about', aboutPage);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
