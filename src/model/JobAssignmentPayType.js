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


/**
 * Enum class JobAssignmentPayType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "NONE"
   * @const
   */
  "NONE": "NONE",
  /**
   * value: "HOURLY"
   * @const
   */
  "HOURLY": "HOURLY",
  /**
   * value: "SALARY"
   * @const
   */
  "SALARY": "SALARY"};

/**
 * Returns a <code>JobAssignmentPayType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/JobAssignmentPayType} The enum <code>JobAssignmentPayType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


