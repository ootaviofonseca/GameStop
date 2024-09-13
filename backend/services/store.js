const { create } = require('domain')
const { get } = require('http')
const pool = require('../db/db')


async function notMyGames() {
    try {
        const [rows] = await pool.query('SELECT games.id, name, platform, rating FROM games LEFT JOIN mygames ON games.id = mygames.game_id WHERE mygames.game_id IS NULL');
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    notMyGames
}