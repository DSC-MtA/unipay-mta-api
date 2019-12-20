const dal = require('../../dal/dal');

let helloAuth = async (req, res) => {
    res.send('hello auth');
}

module.exports = {
    helloAuth: helloAuth,
};