const { create } = require('domain')
const fs = require('fs')
const { get } = require('http')

function getAllGames() {
    return JSON.parse(fs.readFileSync("games.json")) 
}

function getGameByID(id) {
    const games = getAllGames()

    const filterGame = games.filter(game => game.id == id)[0]

    if (filterGame) {
        return filterGame
    } else {
        throw new Error("Game not found")
    }
}

function createGame(newGame) {
    const games = getAllGames()
    
    const newGamesList = [...games, newGame]

    fs.writeFileSync("games.json", JSON.stringify(newGamesList))
}

function updateGame(updates, id) {
    let games = getAllGames()
    
    const gameIndex = games.findIndex(game => game.id == id)

    const updatedGame = {...games[gameIndex], ...updates}

    games[gameIndex] = updatedGame

    fs.writeFileSync("games.json", JSON.stringify(games))
}

function removeGame(id) {
    let games = getAllGames()

    const gameIndex = games.findIndex(game => game.id == id)

    games.splice(gameIndex, 1)

    fs.writeFileSync("games.json", JSON.stringify(games))
}

module.exports = { 
    getAllGames,
    getGameByID,
    createGame,
    updateGame,
    removeGame,
}