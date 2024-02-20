const express = require('express');
const { startDatabase, stopDatabase, isConnected } = require('./database.js');
const app = express()

app.get('/home', (req, res) => {
    res.json({
      message: isConnected() ? 'Database is connected' : 'Disconnected from database'
    })
});

app.get('/', (req, res) => {
  res.json({
    message: isConnected() ? 'Database is connected' : 'disconnected'
  })
});

process.on('SIGINT', async () => {
    await stopDatabase();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    await stopDatabase();
    process.exit(0);
  });
  

app.get('/ping', (req, res) => {
    res.send('Welcome to amazing world of football ⚽')
})

app.listen(3000,async()=>{
    await startDatabase();

    console.log('Starting server ...🚀')
    console.log('Server running on port 3000 🏃‍♂️')
})