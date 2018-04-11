const conf = require('config.json');
module.exports = {
    mongoUri = conf.Database_Mongo_URI,
    mongoOptions = conf.Database_Mongo_Options
}