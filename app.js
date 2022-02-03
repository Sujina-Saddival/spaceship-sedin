const express = require('express'),
    app = express();

const optimizeRoutes = require('./config/routes/optimize');

const port = 3000;

optimizeRoutes(app);

app.get('/', function (req, res) {
    res.json({ title: 'Welcome to build optimized Space Ship' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))