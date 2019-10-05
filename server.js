import express from 'express';
import connectDatabase from './config/db';

//initialize express application
const app = express();

//connect database
connectDatabase();

//api endpoints
/**
 *@route GET/
 *@desc test endpoints/
 **/

app.get('/', (req, res) =>
    res.send('http get request sent to api endpoint')
);

/**
 *@route POST api/users
 *@desc register user
 **/

app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

//connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));

