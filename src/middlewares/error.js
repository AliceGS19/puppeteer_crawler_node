module.exports = (err, _req, res) => {
    console.error(err);
    return res.status(500).end();
};
