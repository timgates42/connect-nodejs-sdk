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
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

const SquareConnect = require('../../src/index');
const {
  accounts,
  expect,
  handleUnexpectedError,
  generateIdempotencyKey
} = require('../support/setup');

describe('TransactionsApi', function () {

//   beforeEach(function () {
//     this.account = accounts.sandbox;
//     this.locationId = this.account.location_id;

//     const defaultClient = SquareConnect.ApiClient.instance;
//     const oauth2 = defaultClient.authentications['oauth2'];
//     oauth2.accessToken = this.account.access_token;
//     this.api = new SquareConnect.TransactionsApi();
//   });

//   it('should call captureTransaction successfully', async function () {
//     const locationId = this.locationId;

//     const transaction = await this.api.charge(locationId, {
//       idempotency_key: generateIdempotencyKey(),
//       delay_capture: true,
//       amount_money: {amount: 200, currency: 'USD'},
//       card_nonce: 'fake-card-nonce-ok'
//     }).catch(handleUnexpectedError).then(resp => resp.transaction);

//     const captureResponse = await
//       this.api.captureTransaction(locationId, transaction.id)
//         .catch(handleUnexpectedError);
//     expect(captureResponse.errors).not.to.exist;
//   });

//   it('should call charge successfully', async function () {
//     // Check different sandbox values here https://docs.connect.squareup.com/articles/using-sandbox

//     const locationId = this.locationId;
//     const chargeRequest = {
//       idempotency_key: generateIdempotencyKey(),
//       amount_money: {amount: 200, currency: 'USD'},
//       card_nonce: 'fake-card-nonce-ok',
//       shipping_address: {
//         address_line_1: '123 Main St',
//         locality: 'San Francisco',
//         administrative_district_level_1: 'CA',
//         postal_code: '94114',
//         country: 'US'
//       },
//       billing_address: {
//         address_line_1: '500 Electric Ave',
//         address_line_2: 'Suite 600',
//         administrative_district_level_1: 'NY',
//         locality: 'New York',
//         postal_code: '10003',
//         country: 'US'
//       },
//       reference_id: 'optional reference #112358',
//       note: 'optional note'
//     };

//     const resp = await this.api.charge(locationId, chargeRequest)
//       .catch(handleUnexpectedError);

//     expect(resp.transaction).to.exist;
//     expect(resp.transaction.id).to.exist;
//   });

//   it('should call createRefund successfully', async function () {
//     const locationId = this.locationId;
//     const transaction = await this.api.charge(locationId, {
//       idempotency_key: generateIdempotencyKey(),
//       amount_money: {amount: 200, currency: 'USD'},
//       card_nonce: 'fake-card-nonce-ok'
//     }).catch(handleUnexpectedError).then(resp => resp.transaction);

//     expect(transaction.tenders[0]).to.exist;

//     const refundResp = await this.api.createRefund(locationId, transaction.id, {
//       idempotency_key: generateIdempotencyKey(),
//       tender_id: transaction.tenders[0].id,
//       amount_money: {amount: 100, currency: 'USD'},
//       reason: 'Cancelled order'
//     }).catch(handleUnexpectedError);

//     const refund = refundResp.refund;
//     expect(refund.id).to.exist;
//   });

//   it('should call listRefunds successfully', async function () {
//     const response = await this.api.listRefunds(this.locationId)
//       .catch(handleUnexpectedError);
//     expect(response.errors).not.to.exist;
//     expect(response.refunds).not.to.be.empty;
//   });

//   it('should call listTransactions successfully', async function () {
//     const response = await this.api.listTransactions(this.locationId)
//       .catch(handleUnexpectedError);
//     expect(response.errors).not.to.exist;
//     expect(response.transactions).not.to.be.empty;
//   });

//   it('should call retrieveTransaction successfully', async function () {
//     const locationId = this.locationId;
//     const transaction = await this.api.charge(locationId, {
//       idempotency_key: generateIdempotencyKey(),
//       amount_money: {amount: 200, currency: 'USD'},
//       card_nonce: 'fake-card-nonce-ok'
//     }).catch(handleUnexpectedError).then(resp => resp.transaction);

//     const response = await this.api.retrieveTransaction(locationId, transaction.id)
//       .catch(handleUnexpectedError);
//     expect(response.transaction.id).to.eql(transaction.id);
//   });

//   it('should call voidTransaction successfully', async function () {
//     const locationId = this.locationId;
//     const transaction = await this.api.charge(locationId, {
//       idempotency_key: generateIdempotencyKey(),
//       delay_capture: true,
//       amount_money: {amount: 200, currency: 'USD'},
//       card_nonce: 'fake-card-nonce-ok'
//     }).catch(handleUnexpectedError).then(resp => resp.transaction);

//     const response = await this.api.voidTransaction(locationId, transaction.id)
//       .catch(handleUnexpectedError);

//     expect(response.errors).not.to.exist;
//   });
});
