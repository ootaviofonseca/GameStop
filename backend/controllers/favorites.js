const { getFavorites, addFavorite, removeFavorite } = require('../services/favorites')

function getAllFavorites(req, res) {
    try {
        const favorites = getFavorites()
        res.send(favorites)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorite(req, res) {
    try {
        const id = req.params.id
        addFavorite(id)
        res.status(201)
        res.send("Game added to favorites")
        
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id
        if (!isNaN(id)) {
            removeFavorite(id)
            res.send('Game removed from favorites')
        }else{
            res.status(422)
            res.send('Invalid ID')
        }
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}



module.exports = {
    getAllFavorites,
    postFavorite,
    deleteFavorite,
    
}
