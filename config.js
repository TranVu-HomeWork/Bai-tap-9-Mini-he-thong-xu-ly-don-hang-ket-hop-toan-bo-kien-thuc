require('dotenv').config();

module.exports = {
    PROCESSING_DELAY_MS: process.env.PROCESSING_DELAY_MS || 2000,
    LOG_TIMEZONE: process.env.LOG_TIMEZONE || 'UTC',
};
