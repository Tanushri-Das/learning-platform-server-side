
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');   //c

const allCourses = require('./data/AllCourses.json');   //n

app.get('/',(req,res)=>{
    res.send("News API Running...")
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    const course = allCourses.find(sbj => sbj.course_id === id);
    res.send(course);
})
app.get('/allCourses',(req,res) =>{
    res.send(allCourses);
})
app.get('/allCourses/:id',(req,res)=>{
    const id = req.params.id;
    const selectedCourse = allCourses.find(sbj => sbj._id === id);
    res.send(selectedCourse);
    // console.log(req.params.id)
})


app.listen(port,()=>{
    console.log("Server side is running on port",port);
})