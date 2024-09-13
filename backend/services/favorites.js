const { create } = require('domain')
const fs = require('fs')
const { get } = require('http')
const { getAllGames } = require('./game')

function getFavorites() {
    return JSON.parse(fs.readFileSync("favorites.json")) 
}

function removeFavorite(id) {
    const favorites = getFavorites()
    const newFavorites = favorites.filter(favorite => favorite.id !== Number(id))
    fs.writeFileSync("favorites.json", JSON.stringify(newFavorites))
}

function addFavorite(id) {
    const games = getAllGames()
    const favorites = getFavorites()

    const newFavorite = games.find(game => game.id === Number(id))

    const newFavorites = [...favorites, newFavorite]


   fs.writeFileSync("favorites.json", JSON.stringify(newFavorites))
}



module.exports = {
    getFavorites,
    removeFavorite,
    addFavorite,
}