const express = require('express');

const app = express();
const PORT = 3000;

const data = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/students', (req, res) => {
    res.json(data);
})

app.post('/students', (req, res) => {
    const {name, age, div, course} = req.body;

    data.push({
        id: Date.now(),
        name,
        age, 
        div,
        course
    })

    res.json({message: "Data added successfully"})
})

app.put('/students', (req, res) => {
    const {id, name} = req.body;

    let student = data.find(e => e.id === id);

    student.name = name;

    res.json({message: "Data updated successfully"})
})

app.delete('/students', (req, res) => {
    const {id} = req.body;

    let index = data.findIndex(e => e.id === id);

    data.splice(index, 1)

    res.json({message: "Data deleted successfully"})
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})