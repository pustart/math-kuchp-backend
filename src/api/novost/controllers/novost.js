'use strict';

/**
 * novost controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::novost.novost');
