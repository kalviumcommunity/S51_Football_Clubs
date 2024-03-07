const express = require('express');
const { startDatabase, isConnected } = require('./db/database');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const cors = require('cors');
const {login,signup} = require('./routes/AuthServer')
const {getRouter, postRouter, deleteRouter, putRouter} = require('./routes/CRUDCLubs.routes');
const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.get('/home', (req, res) => {
    res.json({
      message: isConnected() ? 'Database is connected' : 'Disconnected from database'
    })
});

app.use(express.json())
app.use('/',getRouter);
app.use('/', postRouter);
app.use('/', putRouter);
app.use('/', deleteRouter);
app.use('/', login);
app.use('/', signup);

app.get('/ping', (req, res) => {
    res.send('Welcome to amazing world of football ⚽')
})


startDatabase()
.then(()=>{
  app.listen(3000,async()=>{
    console.log('Starting server ...🚀')
    console.log('Server running on port 3000 🏃')
})
})