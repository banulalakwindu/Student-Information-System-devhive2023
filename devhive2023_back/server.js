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

db.connect((err) => {
    if(err)throw err;
    console.log('Connected to MySQL Server!');
});

app.get('/', (req, res) => {
   const sql = 'SELECT * FROM course';
    db.query (sql,(err, result) => {
        if(err){
            console.log(err);
        }

        else{
            res.send(result);
            return res.json(result);
        }
        
    }
    )});

 

app.listen(3000, () => 
{
    console.log('App listening on port 3000!');
});