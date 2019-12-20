const { Pool } = require('pg');
const pool = new Pool();

pool.on('error', err => {
    console.error('Unexpected error on idle client', err);
});

async function runQuery({query: query, args: args}) {
    try {
        let res = await pool.query(query, args);
        return {res: res, error: null};
    } catch (err) {
        return {res: null, error: err};
    }
}

async function getUserByName({name: name}) {
    let {res, error} = await runQuery({query: 'SELECT * FROM Users WHERE Name = $1', args: [name]});

    if (error)
        return {user: null, error: error};
    else
        return {user: res.rows[0], error: error}
}

async function createUser({name: name}) {
    return runQuery({query: 'INSERT INTO Users (Name) VALUES ($1);', args: [name]})
}

module.exports = {
    getUserByName: getUserByName,
    createUser: createUser,
};