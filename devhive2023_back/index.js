const express = require('express');
const cors = require('cors');
const userRoute = require('./src/routes/userRoute');
 

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


app.use("/user", userRoute);

module.exports = app;
 



