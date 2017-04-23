const atlom  = require('atlom');
const config = atlom.config;

atlom.start(config.atlom.modules);

module.exports = atlom;