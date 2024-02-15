const express = require('express')
const app = express()

app.get('/ping', (req, res) => {
    res.send('Welcome to my first express application 🖖')
})

app.listen(3000,()=>{
    console.log('Starting server ...🚀')
    console.log('Server running on port 3000 🏃‍♂️')
})