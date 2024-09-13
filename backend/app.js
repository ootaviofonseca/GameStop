const express = require('express') 
const gameRouter = require('./routes/game') 
const favoriteRouter = require('./routes/favorites')
const myGamesRouter = require('./routes/myGames')

const cors = require('cors')
const app = express() 
app.use(express.json()) 
app.use(cors({origin:"*"})) 

app.use('/games', gameRouter) 
app.use('/favorites', favoriteRouter)
app.use('/mygames', myGamesRouter)

const port = 8000 

app.listen(port, () => { 
    console.log(`Listen  ${port}`)
})
