const { create } = require('domain')
const fs = require('fs')
const { get } = require('http')
const pool = require('../db/db')

async function getAllGames() {
    try {
        const [rows] = await pool.query('SELECT * FROM games');
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getGameByID(id) {
    try {
        const [rows] = await pool.query(`SELECT * FROM games WHERE id = ${id}`);
        return rows;
    } catch (error) {
        throw new Error( error.message);
    }
}

async function createGame(game) {
    try {
        const { name, description, price, image } = game;
        await pool.query(`INSERT INTO games (name, description, price, image) VALUES ('${name}', '${description}', ${price}, '${image}')`);
    } catch (error) {
        throw new Error(error.message);
    }
}

async function updateGame(updates, id) {
    try {
        const { name, description, price, image } = updates;
        await pool.query(`UPDATE games SET name = '${name}', description = '${description}', price = ${price}, image = '${image}' WHERE id = ${id}`);
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeGame(id) {
    try {
        await pool.query(`DELETE FROM games WHERE id = ${id}`);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { 
    getAllGames,
    getGameByID,
    createGame,
    updateGame,
    removeGame,
}   