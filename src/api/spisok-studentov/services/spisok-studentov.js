'use strict';

/**
 * spisok-studentov service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spisok-studentov.spisok-studentov');
