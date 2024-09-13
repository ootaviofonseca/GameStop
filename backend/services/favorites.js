const { create } = require('domain')
const fs = require('fs')
const { get } = require('http')
const { getAllGames } = require('./game')
const pool = require('../db/db')

async function getFavorites() {
    try {
        const [rows] = await pool.query('SELECT game_id, name, platform, rating, src FROM games INNER JOIN favorites ON games.id = favorites.game_id');
        return rows;
    } catch (error) {
        throw new Error( error.message);
    }
}

async function removeFavorite(id) {
    try
    {
        await pool.query('DELETE FROM favorites WHERE game_id = ?', [id]    );
    } 
    catch (error) {
        throw new Error( error.message);
    }
}

async function addFavorite(favorite) {
    try {
        const { game_id } = favorite;
        await pool.query(`INSERT INTO favorites (game_id) VALUES (${game_id})`);
    } catch (error) {
        throw new Error( error.message);
    }
}

module.exports = {
    getFavorites,
    removeFavorite,
    addFavorite,
}