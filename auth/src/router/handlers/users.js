const dal = require('../../dal/dal');

let getUserByName = async (r, w) => {
    let {user, error} = await dal.getUserByName({name: r.query.name});
    if (error)
        w.status(400).send(error);
    else
        w.status(200).send(user);
};

let createUser = async (r, w) => {
    let {error} = await dal.createUser({name: r.body.name});
    if (error)
        w.status(400).send(error);
    else
        w.status(202).send();
};

module.exports = {
    getUserByName: getUserByName,
    createUser: createUser,
};
