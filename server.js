
const express = require('express');
const { quickSort } = require('./quicksort');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.static('public'));


app.post('/sort', (req, res) => {
    try {
        const data = req.body.array;
        if (!Array.isArray(data)) throw new Error('Invalid input');
        const sorted = quickSort(data);
        res.json({ sorted });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});