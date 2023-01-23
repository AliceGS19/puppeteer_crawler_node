const models = require('../../models');

module.exports = async (token) => {
    try {
        const user = await models.findUser({ token: token })
        return user;
    } catch (err) {
        return err;
    }
};
