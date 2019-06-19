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
    root.TractionToolsApiV1.MeasurableOrder = factory(root.TractionToolsApiV1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MeasurableOrder model module.
   * @module model/MeasurableOrder
   * @version v1
   */

  /**
   * Constructs a new <code>MeasurableOrder</code>.
   * @alias module:model/MeasurableOrder
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>MeasurableOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MeasurableOrder} obj Optional instance to populate.
   * @return {module:model/MeasurableOrder} The populated <code>MeasurableOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('ScorecardId')) {
        obj['ScorecardId'] = ApiClient.convertToType(data['ScorecardId'], 'Number');
      }
      if (data.hasOwnProperty('MeasurableId')) {
        obj['MeasurableId'] = ApiClient.convertToType(data['MeasurableId'], 'Number');
      }
      if (data.hasOwnProperty('Ordering')) {
        obj['Ordering'] = ApiClient.convertToType(data['Ordering'], 'Number');
      }
      if (data.hasOwnProperty('Key')) {
        obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {Number} ScorecardId
   */
  exports.prototype['ScorecardId'] = undefined;
  /**
   * @member {Number} MeasurableId
   */
  exports.prototype['MeasurableId'] = undefined;
  /**
   * @member {Number} Ordering
   */
  exports.prototype['Ordering'] = undefined;
  /**
   * @member {String} Key
   */
  exports.prototype['Key'] = undefined;



  return exports;
}));


