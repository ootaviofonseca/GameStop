
const { getAllGames,getGameByID, createGame,updateGame,removeGame} = require('../services/game')


async function getGames(req, res) {
    try {
        const games = await getAllGames();
        res.send(games);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getGame(req, res) {
    const { id } = req.params;
    try {
        const games = await getGameByID(id);
        res.send(games);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function postGame(req, res) {
    const game = req.body;
    try {
        await createGame(game);
        res.send('Game created');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function patchGame(req, res) {
    const { id } = req.params;
    const updates = req.body;
    try {
        await updateGame(updates, id);
        res.send('Game updated');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteGame(req, res) {
    const { id } = req.params;
    try {
        await removeGame(id);
        res.send('Game removed');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getGames,
    getGame,
    postGame,
    patchGame,
    deleteGame,
}