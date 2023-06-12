'use strict';

/**
 * metodichki router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::metodichki.metodichki', {
  config: {
    find: {
      middlewares: [
        // pass a middleware implementation directly
        (ctx, next) => {
          ctx.response.set('Access-Control-Expose-Headers', 'Content-Disposition');
          return next();
        },
      ]
    }
  }
});
