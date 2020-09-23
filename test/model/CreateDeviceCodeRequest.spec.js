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
const SquareConnect = require('../../src/index');

describe('CreateDeviceCodeRequest', function() {
  beforeEach(function() {
    this.api = new SquareConnect.CreateDeviceCodeRequest();
  });

  it('should create an instance of CreateDeviceCodeRequest', function() {
    // uncomment below and update the code to test CreateDeviceCodeRequest
    //var instance = new SquareConnect.CreateDeviceCodeRequest();
    //expect(instance).to.be.a(SquareConnect.CreateDeviceCodeRequest);
  });

  it('should have the property idempotencyKey (base name: "idempotency_key")', function() {
    // uncomment below and update the code to test the property idempotencyKey
    //var instance = new SquareConnect.CreateDeviceCodeRequest();
    //expect(instance).to.be();
  });
  it('should have the property deviceCode (base name: "device_code")', function() {
    // uncomment below and update the code to test the property deviceCode
    //var instance = new SquareConnect.CreateDeviceCodeRequest();
    //expect(instance).to.be();
  });
});
