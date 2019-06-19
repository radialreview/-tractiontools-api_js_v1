/**
 * Traction Tools API - V1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateMilestone', 'model/CreateRockModel_', 'model/Milestone', 'model/Rock', 'model/UpdateRock'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateMilestone'), require('../model/CreateRockModel_'), require('../model/Milestone'), require('../model/Rock'), require('../model/UpdateRock'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.RocksApi = factory(root.TractionToolsApiV1.ApiClient, root.TractionToolsApiV1.CreateMilestone, root.TractionToolsApiV1.CreateRockModel_, root.TractionToolsApiV1.Milestone, root.TractionToolsApiV1.Rock, root.TractionToolsApiV1.UpdateRock);
  }
}(this, function(ApiClient, CreateMilestone, CreateRockModel_, Milestone, Rock, UpdateRock) {
  'use strict';

  /**
   * Rocks service.
   * @module api/RocksApi
   * @version v1
   */

  /**
   * Constructs a new RocksApi. 
   * @alias module:api/RocksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the rocksAddRocksMilestones operation.
     * @callback module:api/RocksApi~rocksAddRocksMilestonesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a milestone to a particular rock
     * @param {Number} ROCK_ID Rock ID
     * @param {module:model/CreateMilestone} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksAddRocksMilestonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */
    this.rocksAddRocksMilestones = function(ROCK_ID, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'ROCK_ID' is set
      if (ROCK_ID === undefined || ROCK_ID === null) {
        throw new Error("Missing the required parameter 'ROCK_ID' when calling rocksAddRocksMilestones");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling rocksAddRocksMilestones");
      }


      var pathParams = {
        'ROCK_ID': ROCK_ID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json'];
      var returnType = Milestone;

      return this.apiClient.callApi(
        '/api/v1/rocks/{ROCK_ID}/milestones', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksArchiveRock operation.
     * @callback module:api/RocksApi~rocksArchiveRockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Archive the rock
     * @param {Number} ROCK_ID Rock ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksArchiveRockCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rocksArchiveRock = function(ROCK_ID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ROCK_ID' is set
      if (ROCK_ID === undefined || ROCK_ID === null) {
        throw new Error("Missing the required parameter 'ROCK_ID' when calling rocksArchiveRock");
      }


      var pathParams = {
        'ROCK_ID': ROCK_ID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/rocks/{ROCK_ID}/archive', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksCreateRock operation.
     * @callback module:api/RocksApi~rocksCreateRockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Rock} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new rock
     * @param {module:model/CreateRockModel_} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksCreateRockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Rock}
     */
    this.rocksCreateRock = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling rocksCreateRock");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json'];
      var returnType = Rock;

      return this.apiClient.callApi(
        '/api/v1/rocks/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksDeleteRocks operation.
     * @callback module:api/RocksApi~rocksDeleteRocksCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a rock
     * @param {Number} ROCK_ID Rock ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksDeleteRocksCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rocksDeleteRocks = function(ROCK_ID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ROCK_ID' is set
      if (ROCK_ID === undefined || ROCK_ID === null) {
        throw new Error("Missing the required parameter 'ROCK_ID' when calling rocksDeleteRocks");
      }


      var pathParams = {
        'ROCK_ID': ROCK_ID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/rocks/{ROCK_ID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksGetArchivedRocksForUser operation.
     * @callback module:api/RocksApi~rocksGetArchivedRocksForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Rock>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of archived rocks for a user
     * @param {Number} USER_ID User ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksGetArchivedRocksForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Rock>}
     */
    this.rocksGetArchivedRocksForUser = function(USER_ID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'USER_ID' is set
      if (USER_ID === undefined || USER_ID === null) {
        throw new Error("Missing the required parameter 'USER_ID' when calling rocksGetArchivedRocksForUser");
      }


      var pathParams = {
        'USER_ID': USER_ID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = [Rock];

      return this.apiClient.callApi(
        '/api/v1/archivedrocks/user/{USER_ID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksGetRock operation.
     * @callback module:api/RocksApi~rocksGetRockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Rock} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific rock
     * @param {Number} ROCK_ID Rock ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeOrigin 
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksGetRockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Rock}
     */
    this.rocksGetRock = function(ROCK_ID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ROCK_ID' is set
      if (ROCK_ID === undefined || ROCK_ID === null) {
        throw new Error("Missing the required parameter 'ROCK_ID' when calling rocksGetRock");
      }


      var pathParams = {
        'ROCK_ID': ROCK_ID
      };
      var queryParams = {
        'Include_Origin': opts['includeOrigin'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = Rock;

      return this.apiClient.callApi(
        '/api/v1/rocks/{ROCK_ID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksGetRocksForUser operation.
     * @callback module:api/RocksApi~rocksGetRocksForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Rock>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of rocks for a user
     * @param {Number} USER_ID User ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeOrigin 
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksGetRocksForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Rock>}
     */
    this.rocksGetRocksForUser = function(USER_ID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'USER_ID' is set
      if (USER_ID === undefined || USER_ID === null) {
        throw new Error("Missing the required parameter 'USER_ID' when calling rocksGetRocksForUser");
      }


      var pathParams = {
        'USER_ID': USER_ID
      };
      var queryParams = {
        'Include_Origin': opts['includeOrigin'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = [Rock];

      return this.apiClient.callApi(
        '/api/v1/rocks/user/{USER_ID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksGetRocksMilestones operation.
     * @callback module:api/RocksApi~rocksGetRocksMilestonesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Milestone>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get milestones for a particular rock
     * @param {Number} ROCK_ID Rock ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksGetRocksMilestonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Milestone>}
     */
    this.rocksGetRocksMilestones = function(ROCK_ID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ROCK_ID' is set
      if (ROCK_ID === undefined || ROCK_ID === null) {
        throw new Error("Missing the required parameter 'ROCK_ID' when calling rocksGetRocksMilestones");
      }


      var pathParams = {
        'ROCK_ID': ROCK_ID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = [Milestone];

      return this.apiClient.callApi(
        '/api/v1/rocks/{ROCK_ID}/milestones', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksGetYourArchivedRocks operation.
     * @callback module:api/RocksApi~rocksGetYourArchivedRocksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Rock>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of your archived rocks
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksGetYourArchivedRocksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Rock>}
     */
    this.rocksGetYourArchivedRocks = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = [Rock];

      return this.apiClient.callApi(
        '/api/v1/archivedrocks/user/mine', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksGetYourRocks operation.
     * @callback module:api/RocksApi~rocksGetYourRocksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Rock>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of your rocks
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeOrigin 
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksGetYourRocksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Rock>}
     */
    this.rocksGetYourRocks = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'Include_Origin': opts['includeOrigin'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = [Rock];

      return this.apiClient.callApi(
        '/api/v1/rocks/user/mine', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksRestoreRock operation.
     * @callback module:api/RocksApi~rocksRestoreRockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restore a rock from the archive
     * @param {Number} ROCK_ID Rock ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksRestoreRockCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rocksRestoreRock = function(ROCK_ID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ROCK_ID' is set
      if (ROCK_ID === undefined || ROCK_ID === null) {
        throw new Error("Missing the required parameter 'ROCK_ID' when calling rocksRestoreRock");
      }


      var pathParams = {
        'ROCK_ID': ROCK_ID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/rocks/{ROCK_ID}/restore', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rocksUpdateRocks operation.
     * @callback module:api/RocksApi~rocksUpdateRocksCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a rock
     * @param {Number} ROCK_ID Rock ID
     * @param {module:model/UpdateRock} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/RocksApi~rocksUpdateRocksCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rocksUpdateRocks = function(ROCK_ID, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'ROCK_ID' is set
      if (ROCK_ID === undefined || ROCK_ID === null) {
        throw new Error("Missing the required parameter 'ROCK_ID' when calling rocksUpdateRocks");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling rocksUpdateRocks");
      }


      var pathParams = {
        'ROCK_ID': ROCK_ID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Include_Permission': opts['includePermission']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/rocks/{ROCK_ID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
