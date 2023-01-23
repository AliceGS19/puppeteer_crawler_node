const models = require('../../models');

module.exports = async (user) => {
    try {
        const { login, password } = user
        const { token } = await models.findUser({ login, password })
        return token;
    } catch (err) {
        return err;
    }
};
