'use strict';

/*eslint no-process-env: 0*/
/*eslint no-inline-comments: 0*/
/*eslint camelcase: 0*/
module.exports = {
  port: process.env.PORT || 8080,
  listen_host: process.env.LISTEN_HOST || '0.0.0.0',
  session: {
    secret: process.env.SESSION_SECRET || 'howdoesyourgardengrow',
    ttl: process.env.SESSION_TTL || 900 /* 15 mins */
  },
  redis: {
    port: process.env.REDIS_PORT || 6379,
    host: process.env.REDIS_HOST || '127.0.0.1'
  }
};
