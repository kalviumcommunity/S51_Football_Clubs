const express = require('express')
const app = express()

app.get('/ping', (req, res) => {
    res.send('Welcome to amazing world of football ⚽')
})

app.listen(3000,()=>{
    console.log('Starting server ...🚀')
    console.log('Server running on port 3000 🏃‍♂️')
})