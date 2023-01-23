const connection = require('./connection');

module.exports = async (userInfo) => {
    try {
      const row = await (await connection()).collection('users').findOne(userInfo);
      return row;
    } catch (err) {
        return (err);
    }
};
