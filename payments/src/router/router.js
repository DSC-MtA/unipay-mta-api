const rootRoutes = require('./routes/root');

function init(app) {
    app.use('/', rootRoutes);
}

module.exports = {
    init,
};