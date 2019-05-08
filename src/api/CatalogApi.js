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
var BatchDeleteCatalogObjectsRequest = require('../model/BatchDeleteCatalogObjectsRequest');
var BatchDeleteCatalogObjectsResponse = require('../model/BatchDeleteCatalogObjectsResponse');
var BatchRetrieveCatalogObjectsRequest = require('../model/BatchRetrieveCatalogObjectsRequest');
var BatchRetrieveCatalogObjectsResponse = require('../model/BatchRetrieveCatalogObjectsResponse');
var BatchUpsertCatalogObjectsRequest = require('../model/BatchUpsertCatalogObjectsRequest');
var BatchUpsertCatalogObjectsResponse = require('../model/BatchUpsertCatalogObjectsResponse');
var CatalogInfoResponse = require('../model/CatalogInfoResponse');
var DeleteCatalogObjectResponse = require('../model/DeleteCatalogObjectResponse');
var ListCatalogResponse = require('../model/ListCatalogResponse');
var RetrieveCatalogObjectResponse = require('../model/RetrieveCatalogObjectResponse');
var SearchCatalogObjectsRequest = require('../model/SearchCatalogObjectsRequest');
var SearchCatalogObjectsResponse = require('../model/SearchCatalogObjectsResponse');
var UpdateItemModifierListsRequest = require('../model/UpdateItemModifierListsRequest');
var UpdateItemModifierListsResponse = require('../model/UpdateItemModifierListsResponse');
var UpdateItemTaxesRequest = require('../model/UpdateItemTaxesRequest');
var UpdateItemTaxesResponse = require('../model/UpdateItemTaxesResponse');
var UpsertCatalogObjectRequest = require('../model/UpsertCatalogObjectRequest');
var UpsertCatalogObjectResponse = require('../model/UpsertCatalogObjectResponse');

/**
 * Catalog service.
 * @module api/CatalogApi
 */

/**
 * Constructs a new CatalogApi. 
 * @alias module:api/CatalogApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * BatchDeleteCatalogObjects
   * Deletes a set of [CatalogItem](#type-catalogitem)s based on the provided list of target IDs and returns a set of successfully deleted IDs in the response. Deletion is a cascading event such that all children of the targeted object are also deleted. For example, deleting a CatalogItem will also delete all of its [CatalogItemVariation](#type-catalogitemvariation) children.  &#x60;BatchDeleteCatalogObjects&#x60; succeeds even if only a portion of the targeted IDs can be deleted. The response will only include IDs that were actually deleted.
   * @param {module:model/BatchDeleteCatalogObjectsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchDeleteCatalogObjectsResponse} and HTTP response
   */
  this.batchDeleteCatalogObjectsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling batchDeleteCatalogObjects");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = BatchDeleteCatalogObjectsResponse;

    return this.apiClient.callApi(
      '/v2/catalog/batch-delete', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * BatchDeleteCatalogObjects
   * Deletes a set of [CatalogItem](#type-catalogitem)s based on the provided list of target IDs and returns a set of successfully deleted IDs in the response. Deletion is a cascading event such that all children of the targeted object are also deleted. For example, deleting a CatalogItem will also delete all of its [CatalogItemVariation](#type-catalogitemvariation) children.  &#x60;BatchDeleteCatalogObjects&#x60; succeeds even if only a portion of the targeted IDs can be deleted. The response will only include IDs that were actually deleted.
   * @param {module:model/BatchDeleteCatalogObjectsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchDeleteCatalogObjectsResponse}
   */
  this.batchDeleteCatalogObjects = function(body) {
    return this.batchDeleteCatalogObjectsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * BatchRetrieveCatalogObjects
   * Returns a set of objects based on the provided ID. Each [CatalogItem](#type-catalogitem) returned in the set includes all of its child information including: all of its [CatalogItemVariation](#type-catalogitemvariation) objects, references to its [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of any [CatalogTax](#type-catalogtax) objects that apply to it.
   * @param {module:model/BatchRetrieveCatalogObjectsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchRetrieveCatalogObjectsResponse} and HTTP response
   */
  this.batchRetrieveCatalogObjectsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling batchRetrieveCatalogObjects");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = BatchRetrieveCatalogObjectsResponse;

    return this.apiClient.callApi(
      '/v2/catalog/batch-retrieve', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * BatchRetrieveCatalogObjects
   * Returns a set of objects based on the provided ID. Each [CatalogItem](#type-catalogitem) returned in the set includes all of its child information including: all of its [CatalogItemVariation](#type-catalogitemvariation) objects, references to its [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of any [CatalogTax](#type-catalogtax) objects that apply to it.
   * @param {module:model/BatchRetrieveCatalogObjectsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchRetrieveCatalogObjectsResponse}
   */
  this.batchRetrieveCatalogObjects = function(body) {
    return this.batchRetrieveCatalogObjectsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * BatchUpsertCatalogObjects
   * Creates or updates up to 10,000 target objects based on the provided list of objects. The target objects are grouped into batches and each batch is inserted/updated in an all-or-nothing manner. If an object within a batch is malformed in some way, or violates a database constraint, the entire batch containing that item will be disregarded. However, other batches in the same request may still succeed. Each batch may contain up to 1,000 objects, and batches will be processed in order as long as the total object count for the request (items, variations, modifier lists, discounts, and taxes) is no more than 10,000.
   * @param {module:model/BatchUpsertCatalogObjectsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchUpsertCatalogObjectsResponse} and HTTP response
   */
  this.batchUpsertCatalogObjectsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling batchUpsertCatalogObjects");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = BatchUpsertCatalogObjectsResponse;

    return this.apiClient.callApi(
      '/v2/catalog/batch-upsert', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * BatchUpsertCatalogObjects
   * Creates or updates up to 10,000 target objects based on the provided list of objects. The target objects are grouped into batches and each batch is inserted/updated in an all-or-nothing manner. If an object within a batch is malformed in some way, or violates a database constraint, the entire batch containing that item will be disregarded. However, other batches in the same request may still succeed. Each batch may contain up to 1,000 objects, and batches will be processed in order as long as the total object count for the request (items, variations, modifier lists, discounts, and taxes) is no more than 10,000.
   * @param {module:model/BatchUpsertCatalogObjectsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchUpsertCatalogObjectsResponse}
   */
  this.batchUpsertCatalogObjects = function(body) {
    return this.batchUpsertCatalogObjectsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CatalogInfo
   * Returns information about the Square Catalog API, such as batch size limits for &#x60;BatchUpsertCatalogObjects&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogInfoResponse} and HTTP response
   */
  this.catalogInfoWithHttpInfo = function() {
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CatalogInfoResponse;

    return this.apiClient.callApi(
      '/v2/catalog/info', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CatalogInfo
   * Returns information about the Square Catalog API, such as batch size limits for &#x60;BatchUpsertCatalogObjects&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogInfoResponse}
   */
  this.catalogInfo = function() {
    return this.catalogInfoWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * DeleteCatalogObject
   * Deletes a single [CatalogObject](#type-catalogobject) based on the provided ID and returns the set of successfully deleted IDs in the response. Deletion is a cascading event such that all children of the targeted object are also deleted. For example, deleting a [CatalogItem](#type-catalogitem) will also delete all of its [CatalogItemVariation](#type-catalogitemvariation) children.
   * @param {String} objectId The ID of the [CatalogObject](#type-catalogobject) to be deleted. When an object is deleted, other objects in the graph that depend on that object will be deleted as well (for example, deleting a [CatalogItem](#type-catalogitem) will delete its [CatalogItemVariation](#type-catalogitemvariation)s).
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteCatalogObjectResponse} and HTTP response
   */
  this.deleteCatalogObjectWithHttpInfo = function(objectId) {
    var postBody = null;

    // verify the required parameter 'objectId' is set
    if (objectId === undefined || objectId === null) {
      throw new Error("Missing the required parameter 'objectId' when calling deleteCatalogObject");
    }


    var pathParams = {
      'object_id': objectId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = DeleteCatalogObjectResponse;

    return this.apiClient.callApi(
      '/v2/catalog/object/{object_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * DeleteCatalogObject
   * Deletes a single [CatalogObject](#type-catalogobject) based on the provided ID and returns the set of successfully deleted IDs in the response. Deletion is a cascading event such that all children of the targeted object are also deleted. For example, deleting a [CatalogItem](#type-catalogitem) will also delete all of its [CatalogItemVariation](#type-catalogitemvariation) children.
   * @param {String} objectId The ID of the [CatalogObject](#type-catalogobject) to be deleted. When an object is deleted, other objects in the graph that depend on that object will be deleted as well (for example, deleting a [CatalogItem](#type-catalogitem) will delete its [CatalogItemVariation](#type-catalogitemvariation)s).
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteCatalogObjectResponse}
   */
  this.deleteCatalogObject = function(objectId) {
    return this.deleteCatalogObjectWithHttpInfo(objectId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListCatalog
   * Returns a list of [CatalogObject](#type-catalogobject)s that includes all objects of a set of desired types (for example, all [CatalogItem](#type-catalogitem) and [CatalogTax](#type-catalogtax) objects) in the catalog. The types parameter is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject) types: &#x60;ITEM&#x60;, &#x60;ITEM_VARIATION&#x60;, &#x60;MODIFIER&#x60;, &#x60;MODIFIER_LIST&#x60;, &#x60;CATEGORY&#x60;, &#x60;DISCOUNT&#x60;, &#x60;TAX&#x60;.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor The pagination cursor returned in the previous response. Leave unset for an initial request. See [Pagination](/basics/api101/pagination) for more information.
   * @param {String} opts.types An optional case-insensitive, comma-separated list of object types to retrieve, for example &#x60;ITEM,ITEM_VARIATION,CATEGORY,IMAGE&#x60;.  The legal values are taken from the [CatalogObjectType](#type-catalogobjecttype) enumeration, namely &#x60;ITEM&#x60;, &#x60;ITEM_VARIATION&#x60;, &#x60;CATEGORY&#x60;, &#x60;DISCOUNT&#x60;, &#x60;TAX&#x60;, &#x60;MODIFIER&#x60;, &#x60;MODIFIER_LIST&#x60;, or &#x60;IMAGE&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCatalogResponse} and HTTP response
   */
  this.listCatalogWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'cursor': opts['cursor'],
      'types': opts['types']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListCatalogResponse;

    return this.apiClient.callApi(
      '/v2/catalog/list', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListCatalog
   * Returns a list of [CatalogObject](#type-catalogobject)s that includes all objects of a set of desired types (for example, all [CatalogItem](#type-catalogitem) and [CatalogTax](#type-catalogtax) objects) in the catalog. The types parameter is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject) types: &#x60;ITEM&#x60;, &#x60;ITEM_VARIATION&#x60;, &#x60;MODIFIER&#x60;, &#x60;MODIFIER_LIST&#x60;, &#x60;CATEGORY&#x60;, &#x60;DISCOUNT&#x60;, &#x60;TAX&#x60;.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor The pagination cursor returned in the previous response. Leave unset for an initial request. See [Pagination](/basics/api101/pagination) for more information.
   * @param {String} opts.types An optional case-insensitive, comma-separated list of object types to retrieve, for example &#x60;ITEM,ITEM_VARIATION,CATEGORY,IMAGE&#x60;.  The legal values are taken from the [CatalogObjectType](#type-catalogobjecttype) enumeration, namely &#x60;ITEM&#x60;, &#x60;ITEM_VARIATION&#x60;, &#x60;CATEGORY&#x60;, &#x60;DISCOUNT&#x60;, &#x60;TAX&#x60;, &#x60;MODIFIER&#x60;, &#x60;MODIFIER_LIST&#x60;, or &#x60;IMAGE&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCatalogResponse}
   */
  this.listCatalog = function(opts) {
    return this.listCatalogWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveCatalogObject
   * Returns a single [CatalogItem](#type-catalogitem) as a [CatalogObject](#type-catalogobject) based on the provided ID. The returned object includes all of the relevant [CatalogItem](#type-catalogitem) information including: [CatalogItemVariation](#type-catalogitemvariation) children, references to its [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of any [CatalogTax](#type-catalogtax) objects that apply to it.
   * @param {String} objectId The object ID of any type of [CatalogObject](#type-catalogobject)s to be retrieved.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.includeRelatedObjects If &#x60;true&#x60;, the response will include additional objects that are related to the requested object, as follows:  If the &#x60;object&#x60; field of the response contains a [CatalogItem](#type-catalogitem), its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the &#x60;related_objects&#x60; field of the response. If the &#x60;object&#x60; field of the response contains a [CatalogItemVariation](#type-catalogitemvariation), its parent [CatalogItem](#type-catalogitem) will be returned in the &#x60;related_objects&#x60; field of the response.  Default value: &#x60;false&#x60;
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveCatalogObjectResponse} and HTTP response
   */
  this.retrieveCatalogObjectWithHttpInfo = function(objectId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'objectId' is set
    if (objectId === undefined || objectId === null) {
      throw new Error("Missing the required parameter 'objectId' when calling retrieveCatalogObject");
    }


    var pathParams = {
      'object_id': objectId
    };
    var queryParams = {
      'include_related_objects': opts['includeRelatedObjects']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveCatalogObjectResponse;

    return this.apiClient.callApi(
      '/v2/catalog/object/{object_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveCatalogObject
   * Returns a single [CatalogItem](#type-catalogitem) as a [CatalogObject](#type-catalogobject) based on the provided ID. The returned object includes all of the relevant [CatalogItem](#type-catalogitem) information including: [CatalogItemVariation](#type-catalogitemvariation) children, references to its [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of any [CatalogTax](#type-catalogtax) objects that apply to it.
   * @param {String} objectId The object ID of any type of [CatalogObject](#type-catalogobject)s to be retrieved.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.includeRelatedObjects If &#x60;true&#x60;, the response will include additional objects that are related to the requested object, as follows:  If the &#x60;object&#x60; field of the response contains a [CatalogItem](#type-catalogitem), its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the &#x60;related_objects&#x60; field of the response. If the &#x60;object&#x60; field of the response contains a [CatalogItemVariation](#type-catalogitemvariation), its parent [CatalogItem](#type-catalogitem) will be returned in the &#x60;related_objects&#x60; field of the response.  Default value: &#x60;false&#x60;
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveCatalogObjectResponse}
   */
  this.retrieveCatalogObject = function(objectId, opts) {
    return this.retrieveCatalogObjectWithHttpInfo(objectId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SearchCatalogObjects
   * Queries the targeted catalog using a variety of query types: [CatalogQuerySortedAttribute](#type-catalogquerysortedattribute), [CatalogQueryExact](#type-catalogqueryexact), [CatalogQueryRange](#type-catalogqueryrange), [CatalogQueryText](#type-catalogquerytext), [CatalogQueryItemsForTax](#type-catalogqueryitemsfortax), and [CatalogQueryItemsForModifierList](#type-catalogqueryitemsformodifierlist).
   * @param {module:model/SearchCatalogObjectsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchCatalogObjectsResponse} and HTTP response
   */
  this.searchCatalogObjectsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchCatalogObjects");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = SearchCatalogObjectsResponse;

    return this.apiClient.callApi(
      '/v2/catalog/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SearchCatalogObjects
   * Queries the targeted catalog using a variety of query types: [CatalogQuerySortedAttribute](#type-catalogquerysortedattribute), [CatalogQueryExact](#type-catalogqueryexact), [CatalogQueryRange](#type-catalogqueryrange), [CatalogQueryText](#type-catalogquerytext), [CatalogQueryItemsForTax](#type-catalogqueryitemsfortax), and [CatalogQueryItemsForModifierList](#type-catalogqueryitemsformodifierlist).
   * @param {module:model/SearchCatalogObjectsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchCatalogObjectsResponse}
   */
  this.searchCatalogObjects = function(body) {
    return this.searchCatalogObjectsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateItemModifierLists
   * Updates the [CatalogModifierList](#type-catalogmodifierlist) objects that apply to the targeted [CatalogItem](#type-catalogitem) without having to perform an upsert on the entire item.
   * @param {module:model/UpdateItemModifierListsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateItemModifierListsResponse} and HTTP response
   */
  this.updateItemModifierListsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateItemModifierLists");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpdateItemModifierListsResponse;

    return this.apiClient.callApi(
      '/v2/catalog/update-item-modifier-lists', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateItemModifierLists
   * Updates the [CatalogModifierList](#type-catalogmodifierlist) objects that apply to the targeted [CatalogItem](#type-catalogitem) without having to perform an upsert on the entire item.
   * @param {module:model/UpdateItemModifierListsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateItemModifierListsResponse}
   */
  this.updateItemModifierLists = function(body) {
    return this.updateItemModifierListsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateItemTaxes
   * Updates the [CatalogTax](#type-catalogtax) objects that apply to the targeted [CatalogItem](#type-catalogitem) without having to perform an upsert on the entire item.
   * @param {module:model/UpdateItemTaxesRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateItemTaxesResponse} and HTTP response
   */
  this.updateItemTaxesWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateItemTaxes");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpdateItemTaxesResponse;

    return this.apiClient.callApi(
      '/v2/catalog/update-item-taxes', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateItemTaxes
   * Updates the [CatalogTax](#type-catalogtax) objects that apply to the targeted [CatalogItem](#type-catalogitem) without having to perform an upsert on the entire item.
   * @param {module:model/UpdateItemTaxesRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateItemTaxesResponse}
   */
  this.updateItemTaxes = function(body) {
    return this.updateItemTaxesWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpsertCatalogObject
   * Creates or updates the target [CatalogObject](#type-catalogobject).
   * @param {module:model/UpsertCatalogObjectRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpsertCatalogObjectResponse} and HTTP response
   */
  this.upsertCatalogObjectWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling upsertCatalogObject");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-05-08';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpsertCatalogObjectResponse;

    return this.apiClient.callApi(
      '/v2/catalog/object', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpsertCatalogObject
   * Creates or updates the target [CatalogObject](#type-catalogobject).
   * @param {module:model/UpsertCatalogObjectRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpsertCatalogObjectResponse}
   */
  this.upsertCatalogObject = function(body) {
    return this.upsertCatalogObjectWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
