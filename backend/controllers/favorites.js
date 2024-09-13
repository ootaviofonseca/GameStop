const { getFavorites, addFavorite, removeFavorite } = require('../services/favorites')

async function getAllFavorites(req, res) {
    const favorites = await getFavorites()
    res.json(favorites)
}

async function postFavorite(req, res) {
    const { id } = req.params;  
    await addFavorite({ game_id: id });  
    res.status(201).end();
}

async function deleteFavorite(req, res) {
    const { id } = req.params; 
    await removeFavorite(id);
    res.status(204).end();
}


module.exports = {
    getAllFavorites,
    postFavorite,
    deleteFavorite,  
}
