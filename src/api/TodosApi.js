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
    define(['ApiClient', 'model/CreateTodo_', 'model/Todo', 'model/UpdateTodo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateTodo_'), require('../model/Todo'), require('../model/UpdateTodo'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.TodosApi = factory(root.TractionToolsApiV1.ApiClient, root.TractionToolsApiV1.CreateTodo_, root.TractionToolsApiV1.Todo, root.TractionToolsApiV1.UpdateTodo);
  }
}(this, function(ApiClient, CreateTodo_, Todo, UpdateTodo) {
  'use strict';

  /**
   * Todos service.
   * @module api/TodosApi
   * @version v1
   */

  /**
   * Constructs a new TodosApi. 
   * @alias module:api/TodosApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the todosCreateTodo operation.
     * @callback module:api/TodosApi~todosCreateTodoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a personal to-do
     * @param {module:model/CreateTodo_} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/TodosApi~todosCreateTodoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Todo}
     */
    this.todosCreateTodo = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling todosCreateTodo");
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
      var returnType = Todo;

      return this.apiClient.callApi(
        '/api/v1/todo/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the todosEditTodo operation.
     * @callback module:api/TodosApi~todosEditTodoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a to-do
     * @param {Number} TODO_ID Todo ID
     * @param {module:model/UpdateTodo} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/TodosApi~todosEditTodoCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.todosEditTodo = function(TODO_ID, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'TODO_ID' is set
      if (TODO_ID === undefined || TODO_ID === null) {
        throw new Error("Missing the required parameter 'TODO_ID' when calling todosEditTodo");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling todosEditTodo");
      }


      var pathParams = {
        'TODO_ID': TODO_ID
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
        '/api/v1/todo/{TODO_ID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the todosGet operation.
     * @callback module:api/TodosApi~todosGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a particular to-do
     * @param {Number} TODO_ID Todo ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/TodosApi~todosGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Todo}
     */
    this.todosGet = function(TODO_ID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'TODO_ID' is set
      if (TODO_ID === undefined || TODO_ID === null) {
        throw new Error("Missing the required parameter 'TODO_ID' when calling todosGet");
      }


      var pathParams = {
        'TODO_ID': TODO_ID
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
      var returnType = Todo;

      return this.apiClient.callApi(
        '/api/v1/todo/{TODO_ID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the todosGetMineTodos operation.
     * @callback module:api/TodosApi~todosGetMineTodosCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Todo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your to-dos
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/TodosApi~todosGetMineTodosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Todo>}
     */
    this.todosGetMineTodos = function(opts, callback) {
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
      var returnType = [Todo];

      return this.apiClient.callApi(
        '/api/v1/todo/users/mine', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the todosGetUserTodos operation.
     * @callback module:api/TodosApi~todosGetUserTodosCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Todo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get to-dos for a user
     * @param {Number} USER_ID User ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/TodosApi~todosGetUserTodosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Todo>}
     */
    this.todosGetUserTodos = function(USER_ID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'USER_ID' is set
      if (USER_ID === undefined || USER_ID === null) {
        throw new Error("Missing the required parameter 'USER_ID' when calling todosGetUserTodos");
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
      var returnType = [Todo];

      return this.apiClient.callApi(
        '/api/v1/todo/user/{USER_ID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the todosMarkComplete operation.
     * @callback module:api/TodosApi~todosMarkCompleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the completion of a to-do
     * @param {Number} TODO_ID Todo ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.status Is completed (Default: true)
     * @param {Boolean} opts.includePermission Include permission in the response
     * @param {module:api/TodosApi~todosMarkCompleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.todosMarkComplete = function(TODO_ID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'TODO_ID' is set
      if (TODO_ID === undefined || TODO_ID === null) {
        throw new Error("Missing the required parameter 'TODO_ID' when calling todosMarkComplete");
      }


      var pathParams = {
        'TODO_ID': TODO_ID
      };
      var queryParams = {
        'status': opts['status'],
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
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/api/v1/todo/{TODO_ID}/complete', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
