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
var InventoryChange = require('./InventoryChange');




/**
 * The BatchChangeInventoryRequest model module.
 * @module model/BatchChangeInventoryRequest
 */

/**
 * Constructs a new <code>BatchChangeInventoryRequest</code>.
 * 
 * @alias module:model/BatchChangeInventoryRequest
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>BatchChangeInventoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BatchChangeInventoryRequest} obj Optional instance to populate.
 * @return {module:model/BatchChangeInventoryRequest} The populated <code>BatchChangeInventoryRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('changes')) {
      obj['changes'] = ApiClient.convertToType(data['changes'], [InventoryChange]);
    }
      if (data.hasOwnProperty('ignore_unchanged_counts')) {
      obj['ignore_unchanged_counts'] = ApiClient.convertToType(data['ignore_unchanged_counts'], 'Boolean');
    }
    }
  return obj;
}

/**
 * A client-supplied, universally unique identifier (UUID) for the request.  See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) in the [API Development 101](https://developer.squareup.com/docs/basics/api101/overview) section for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The set of physical counts and inventory adjustments to be made. Changes are applied based on the client-supplied timestamp and may be sent out of order. Max size is 100 changes.
 * @member {Array.<module:model/InventoryChange>} changes
 */
exports.prototype['changes'] = undefined;
/**
 * Indicates whether the current physical count should be ignored if the quantity is unchanged since the last physical count. Default: `true`.
 * @member {Boolean} ignore_unchanged_counts
 */
exports.prototype['ignore_unchanged_counts'] = undefined;



module.exports = exports;



