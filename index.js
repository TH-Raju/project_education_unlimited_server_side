const express = require('express')
const app = express();
const cors = require('cors');
const courses = require('./data/course.json');
const port = process.env.PORT || 5000;
app.use(cors());


app.get('/', (req, res) => {
    res.send('API Running');
});


app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id == '0') {
        res.send(courses);
    } else {
        const selectCourse = courses.find(n => n.id == id);
        res.send(selectCourse);
    }

});

app.listen(port, () => {
    console.log('Server Running...')
})