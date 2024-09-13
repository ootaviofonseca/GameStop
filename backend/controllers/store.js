const { notMyGames} = require('../services/store')	

async function getNotMyGames(req, res) {
    const MyGames = await notMyGames()
    res.json(MyGames)
}

module.exports = {
    getNotMyGames
}
