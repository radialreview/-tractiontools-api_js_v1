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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.LocalDateTime = factory(root.TractionToolsApiV1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LocalDateTime model module.
   * @module model/LocalDateTime
   * @version v1
   */

  /**
   * Constructs a new <code>LocalDateTime</code>.
   * @alias module:model/LocalDateTime
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>LocalDateTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocalDateTime} obj Optional instance to populate.
   * @return {module:model/LocalDateTime} The populated <code>LocalDateTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Local')) {
        obj['Local'] = ApiClient.convertToType(data['Local'], 'Boolean');
      }
      if (data.hasOwnProperty('Date')) {
        obj['Date'] = ApiClient.convertToType(data['Date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} Local
   */
  exports.prototype['Local'] = undefined;
  /**
   * @member {Date} Date
   */
  exports.prototype['Date'] = undefined;



  return exports;
}));


