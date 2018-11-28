const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    res.send("Hello World 😎! ")
})

app.get('/about/', (req, res) =>{
    res.send("This is the about page 😎! ")
})

app.get('/help/', (req, res) =>{
    res.send("This is the about page 😎! ")
})

app.get('/contact/', (req, res) =>{
    res.send("This is the about page 😎! ")
})

app.listen(3000)
console.log("hello")