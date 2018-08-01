'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const pg = require('pg');

const connectionString = 'postgres://teacher:@localhost:5432/devstation';
const client = new pg.Client(connectionString);
client.connect();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});

app.get('/db/students', (req, res) => {
  client.query(`SELECT * FROM students;`)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => console.error(err));
});

app.post('/db/students/', (req, res) => {
  console.log(req.body);
  client.query(`
    INSERT INTO students(name, cohort, isPassing)
    VALUES($1, $2, $3);`, [req.body.name, req.body.cohort, req.body.isPassing])
    .then(() => res.redirect('/'))
    .catch(err => console.error(err));
});

app.post('/db/seed', (req, res) => {
  // Let's make sure we delete all records from student
  client.query(`TRUNCATE TABLE students;`)
    .then(() => {
      // Now we can add seed data to the database
      let queryString = `INSERT INTO students(name, cohort, isPassing) VALUES($1, $2, $3);`; // Alex, this is for you :)
      client.query(queryString, ['Adam', '1', false]); // I should really up my game :/
      client.query(queryString, ['Sharon', '1', true]);
      client.query(queryString, ['Alex', '1', true]);
      client.query(queryString, ['Connor', '1', true]);
    })
    .then(() => {
      // Make sure the page reloads with our new data
      res.redirect('/');
    });
});

createTable();

app.listen(PORT, () => console.log('Listening on port: ' + PORT));

function createTable(){
  client.query(`
    CREATE TABLE IF NOT EXISTS students(
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      cohort INTEGER,
      ispassing BOOLEAN);`)
    .then(response => {
      console.log(response);
    });  
}