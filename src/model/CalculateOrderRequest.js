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
var Order = require('./Order');
var OrderReward = require('./OrderReward');




/**
 * The CalculateOrderRequest model module.
 * Note: This model is in beta.
 * @module model/CalculateOrderRequest
 */

/**
 * Constructs a new <code>CalculateOrderRequest</code>.
 * 
 * @alias module:model/CalculateOrderRequest
 * @class
 * @param order {module:model/Order} The order to be calculated. Expects the entire order, not a sparse update.
 */
var exports = function(order) {
  var _this = this;

  _this['order'] = order;

};

/**
 * Constructs a <code>CalculateOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CalculateOrderRequest} obj Optional instance to populate.
 * @return {module:model/CalculateOrderRequest} The populated <code>CalculateOrderRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('order')) {
      obj['order'] = Order.constructFromObject(data['order']);
    }
      if (data.hasOwnProperty('proposed_rewards')) {
      obj['proposed_rewards'] = ApiClient.convertToType(data['proposed_rewards'], [OrderReward]);
    }
    }
  return obj;
}

/**
 * The order to be calculated. Expects the entire order, not a sparse update.
 * @member {module:model/Order} order
 */
exports.prototype['order'] = undefined;
/**
 * Identifies one or more loyalty reward tiers to apply during order calculation. The discounts defined by the reward tiers are added to the order only to preview the effect of applying the specified reward(s). The reward(s) do not correspond to actual redemptions, that is, no `reward`s are created. Therefore, the reward `id`s are random strings used only to reference the reward tier.
 * @member {Array.<module:model/OrderReward>} proposed_rewards
 */
exports.prototype['proposed_rewards'] = undefined;



module.exports = exports;



