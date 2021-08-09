const { CONNREFUSED } = require('dns');
const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/notes', routes);

app.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(PORT, () =>
    console.log('App listening at https://localhost:${port}')
);