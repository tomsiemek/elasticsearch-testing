const winston = require('winston');
const date = require('./date');


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: './logs/combined.log' })
    ]
  });


  const log = (level, msg) => {
    logger.log({
        level ,
        message: msg,
        date: date.date,
        time: date.time
      });
  }

  module.exports = log;
  