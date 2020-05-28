/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Error = require('./Error');
var LoyaltyReward = require('./LoyaltyReward');




/**
 * The SearchLoyaltyRewardsResponse model module.
 * Note: This model is in beta.
 * @module model/SearchLoyaltyRewardsResponse
 */

/**
 * Constructs a new <code>SearchLoyaltyRewardsResponse</code>.
 * A response that includes the loyalty rewards satisfying the search criteria.
 * @alias module:model/SearchLoyaltyRewardsResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>SearchLoyaltyRewardsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchLoyaltyRewardsResponse} obj Optional instance to populate.
 * @return {module:model/SearchLoyaltyRewardsResponse} The populated <code>SearchLoyaltyRewardsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('rewards')) {
      obj['rewards'] = ApiClient.convertToType(data['rewards'], [LoyaltyReward]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The loyalty rewards that satisfy the search criteria. These are returned in descending order by `updated_at`.
 * @member {Array.<module:model/LoyaltyReward>} rewards
 */
exports.prototype['rewards'] = undefined;
/**
 * The pagination cursor to be used in a subsequent  request. If empty, this is the final response.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



