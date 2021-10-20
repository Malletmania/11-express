const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/db/db.json'))
);

app.post('/api/notes', (req, res) =>
  res.readAndAppend(path.join(__dirname, '/public/notes.html'))
);

app.delete('/api/notes/:id', (req, res) =>
  res.readAndAppend(path.join(__dirname, '/bd/bd.json'))
);