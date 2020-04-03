
const { isObject } = require("wtf-is-this");

/**
 * @param {Object} query - The Mongo Query
 * @param {Object} options  
 * @param {Array} options.dateKeys - The key that will be converted 
 * 
 * @return {Object}
 */
const convertQuery = (query = {}, options = {}) => {
  const { dateKeys = [] } = options;

  let newQuery = {};

  Object.keys(query).forEach((key) => {
    if (dateKeys.includes(key)) {
      if (isObject(query[key])) {
        newQuery[key] = {};

        if (query[key].$lt) {
          newQuery[key].$lt = new Date(query[key].$lt);
        }
        if (query[key].$lte) {
          newQuery[key].$lte = new Date(query[key].$lte);
        }
        if (query[key].$gt) {
          newQuery[key].$gt = new Date(query[key].$gt);
        }
        if (query[key].$gte) {
          newQuery[key].$gte = new Date(query[key].$gte);
        }
      } else {
        newQuery[key] = new Date(query[key]);
      }
    } else if (key == "$and" || key == "$or") {
      newQuery[key] = query[key].map((q) => {
        return convertQuery(q, options);
      });
    } else {
      newQuery[key] = query[key];
    }
  });

  return newQuery;
};

module.exports = { convertQuery };
