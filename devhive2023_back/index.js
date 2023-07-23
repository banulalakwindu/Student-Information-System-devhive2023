const express = require('express');
const cors = require('cors');
const userRoute = require('./src/routes/userRoute');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
 

const app = express();
app.use(express.json());
app.use(cors({
    // origin: ['http://localhost:5173'],
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    key: "userId",
    secret: "devhive",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}));

app.listen(3000, () => 
{
    console.log('App listening on port 3000!');
});
app.get('/', (req, res) => {
    return res.json('Hello World!');
});


app.use("/user", userRoute);

module.exports = app;
 



