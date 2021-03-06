var winston = require('winston');
var path = require('path');

winston.emitErrs = true;

var logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: path.join(__dirname, '../logs/all-logs.log'),
      handleExceptions: true,
      json: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: false
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      timestamp: true,
      colorize: true
    })
  ],
  exitOnError: false
});

module.exports = logger;