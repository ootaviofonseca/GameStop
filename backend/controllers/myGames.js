const {addMyGame,removeMyGame,getMygames} = require('../services/myGames');

async function getAllMyGames(req, res) {
    const favorites = await getMygames()
    res.json(favorites)
}

async function postMyGame(req, res) {
    const { id } = req.params;  
    await addMyGame({ game_id: id });  
    res.status(201).end();
}

async function deleteMyGame(req, res) {
    const { id } = req.params; 
    await removeMyGame(id);
    res.status(204).end();
}


module.exports = {
    getAllMyGames,
    postMyGame,
    deleteMyGame,  
}
