const rootRoutes = require('./routes/root');
const userRoutes = require('./routes/users');

function init(app) {
    app.use('/', rootRoutes);
    app.use('/users', userRoutes);
}

module.exports = {
    init,
};
