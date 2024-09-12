const express = require('express') // import express
const gameRouter = require('./routes/game') // import gameRouter

const app = express() // create express app

app.use(express.json()) 

app.use('/games', gameRouter) 

const port = 8000 

app.listen(port, () => { // listen to the port
    console.log(`Listen  ${port}`)
})
