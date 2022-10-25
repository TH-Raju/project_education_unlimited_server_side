const express = require('express')
const app = express();
const courses = require('./data/course.json');
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    res.send('API Running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('Server Running...')
})