import account from "./account.model.js";
import { AggregationCursorOptions } from "./../../node_modules/mongodb/src/cursor/aggregation_cursor";
import { IdPInfo } from "./../../node_modules/mongodb/src/cmap/auth/mongodb_oidc";

//create account
export const create = (data) => {
  return account.create(data);
};

//get all accounts
export const findMany = (filter = {}, projections = null, options = {}) => {
  return account.findMany(filter, projections, options);
};

//get specific account
export const findOne = (filter = {}, projections = null, options = {}) => {
  return account.findOne(filter, projections, options);
};

export const findById = (id, projections = null, options = {}) => {
  return account.findById(id, projections, options);
};

//check account is exist or not
export const exists = (filter = {}) => {
  return account.exists(filter);
};

//get data using Aggregation
export const aggregate = (pipeline = [], options = {}) => {
  return account.aggregate(pipeline).option(options);
};

//update account by its id
export const updateById = (id, projections = null, filter = {}) => {
  return account.findByIdAndUpdate(id, projections, filter);
};

//delete account by its Id
export const deleteById = (id, options = {}) => {
  return account.findByIdAndDelete(id, options);
};

//delete many accounts
export const deleteMany = (filter = {}, options = {}) => {
  return account.deleteMany(filter, options);
};
