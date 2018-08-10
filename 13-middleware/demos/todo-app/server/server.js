'use strict'

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT;
const TOKEN = process.env.TOKEN;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());

app.get('/tasks', (req, res) => {
  let SQL = 'SELECT * from tasks;';
  
  client.query(SQL)
    .then(results => res.send(results.rows))
    .catch(console.error);
});

app.get('/admin', (req, res) => res.send(TOKEN === parseInt(req.query.token)))

app.post('/tasks/add', express.urlencoded(), (req, res) => {
  let {title, description, category, contact, status} = req.body;
  
  let SQL = 'INSERT INTO tasks(title, description, category, contact, status) VALUES ($1, $2, $3, $4, $5);';
  let values = [title, description, category, contact, status];
  
  client.query(SQL, values)
    .then(res.sendStatus(201))
    .catch(console.error);
});

app.get('*', (req, res) => res.status(403).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
