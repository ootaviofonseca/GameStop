
const { getAllGames,getGameByID, createGame,updateGame,removeGame} = require('../services/game')

function getGames(req, res) {
    try {
        const games = getAllGames()
        res.send(games)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getGame(req, res) {
    try {
        const id = req.params.id
        const game = getGameByID(id)
        res.send(game)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postGame(req, res) {
    try {
        const newGame = req.body 
        createGame(newGame)
        res.status(201)
        res.send('Game created')
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchGame(req, res) {
    try {
        const id = req.params.id
        const updates = req.body
        updateGame(updates, id)

        res.send('Game updated')
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteGame(req, res) {
    try {
        const id = req.params.id
        removeGame(id)

        res.send('Game deleted')
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getGames,
    getGame,
    postGame,
    patchGame,
    deleteGame,
}