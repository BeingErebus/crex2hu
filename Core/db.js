const { Database } = require('quickmongo');
const db = new Database(data.mongo);

module.exports = db;