const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors');

dotenv.config({ path: './config.env' })
require('./database/connection');
app.use(express.json());
app.use(cors());
app.use(require('./router/auth'));

const port = process.env.PORT;

const middleware = (req, res, next) => {
    console.log(`hello my middleware`)
}
middleware();

app.get('/sigup', (req, res) => {
    res.send(`hello register world from server`);
});
app.get('/sigin', (req, res) => {
    res.send(`hello register world from server`);
});
app.get('/', (req, res) => {
    res.send(`hello  world from server on homepage`);
});
app.listen(5000, () => {
    console.log(`server is running at port ${port} `)
})