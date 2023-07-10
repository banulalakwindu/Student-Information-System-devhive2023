const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

 

const app = express();
app.use(cors());

 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_database'
});

 

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

 

app.listen(3000, () => 
{
    console.log('App listening on port 3000!');
});