const express = require('express');
const cors = require('cors');

 

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => 
{
    console.log('App listening on port 3000!');
});
app.get('/', (req, res) => {
    return res.json('Hello World!');
});

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'project_database'
// });

// db.connect((err) => {
//     if(err)throw err;
//     console.log('Connected to MySQL Server!');
// });

// // Route for retrieving the results by code
// app.post('/results', (req, res) => {
//     console.log('Request received:', req.body);
//     const code = req.body.code;
//     console.log(code);
//     // Retrieve the results from the database based on code
//     const query = 'SELECT * FROM `students_academic` WHERE `Course_Code` = ? and Reg_Number = ?';
//     regNo = '2019/E/099';
//     db.query(query, [code,regNo], (err, results) => {
//       if (err) {
//         console.error('Error retrieving results:', err);
//         res.sendStatus(500);
//       } else {
//         //console.log(results);
//         return res.status(200).json(results);
//       }
//     });
// });
 



