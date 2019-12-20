const DBMigrate = require('db-migrate');
const dbm = DBMigrate.getInstance(true);

function migrateUp(){
    console.log('running migrations [up]...');
    dbm.reset()
        .then(() => dbm.up());
    console.log('successfully ran migrations [up]...');
}

// Wait for database to start up, then run migrations
setTimeout(migrateUp, 1000);