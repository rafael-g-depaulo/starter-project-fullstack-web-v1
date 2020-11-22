'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {

  // seed database (only if in development)
  if (process.env.NODE_ENV === "development" || process.env.STRAPI_SEED_DB === "true") {
    require("./seeds")(strapi)
  }
}
