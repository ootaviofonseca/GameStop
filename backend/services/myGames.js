const { create } = require('domain')
const fs = require('fs')
const { get } = require('http')
const { getAllGames } = require('./game')
const pool = require('../db/db')

async function getMygames() {
    try {
        const [rows] = await pool.query('SELECT game_id, name, platform, rating, src FROM games INNER JOIN MyGames ON games.id = MyGames.game_id');
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeMyGame(id) {
    try
    {
        await pool.query('DELETE FROM MyGames WHERE game_id = ?', [id]    );
    } 
    catch (error) {
        throw new Error( error.message);
    }
}

async function addMyGame(myGame) {
    try {
        const { game_id } = myGame;
        await pool.query(`INSERT INTO MyGames (game_id) VALUES (${game_id})`);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getMygames,
    removeMyGame,
    addMyGame,
}