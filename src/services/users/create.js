const models = require('../../models');
const { generateToken } = require('../../helpers')

module.exports = async (user) => {
    try {
        const { login, password } = user
        const token = generateToken({ login, password })
        await models.create({ login, password, token}, 'users')
        return token;
    } catch (err) {
        return err;
    }
};
