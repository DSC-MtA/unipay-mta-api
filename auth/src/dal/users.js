const { Pool } = require('pg');
const pool = new Pool();

pool.on('error', err => {
    console.error('Unexpected error on idle client', err);
});

async function getUserByName({name: name}) {
    try {
        let res = await pool.query('SELECT * FROM "Users" WHERE Name = $1', [name]);
        return {user: res.rows[0], error: null}
    } catch (err) {
        return {user: null, error: err};
    }
}

async function createUser({name: name}) {
    try {
        await pool.query('INSERT INTO "Users" (Name) VALUES ($1);', [name]);
        return {error: null}
    } catch (err) {
        return {error: err};
    }
}

module.exports = {
    getUserByName: getUserByName,
    createUser: createUser,
};