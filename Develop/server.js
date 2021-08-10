const express = require('express');
const path = require('path');
const routes = require('../routes/routes');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/notes', routes);


app.get('/notes', function(req,res) {
  res.sendFile(path.join(__dirname,'/public/notes.html'));
});


app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname,'/public/index.html'));
});

// Starts the server to begin listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);