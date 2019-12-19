let helloAuth = async (req, res) => {
    res.send('hello auth');
}

module.exports = {
    helloAuth: helloAuth,
};