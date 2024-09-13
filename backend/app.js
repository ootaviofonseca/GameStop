const express = require('express') 
const gameRouter = require('./routes/game') 
const favoriteRouter = require('./routes/favorites')
const cors = require('cors')
const app = express() 
app.use(express.json()) 
app.use(cors({origin:"*"})) 

app.use('/games', gameRouter) 
app.use('/favorites', favoriteRouter)

const port = 8000 

app.listen(port, () => { 
    console.log(`Listen  ${port}`)
})
