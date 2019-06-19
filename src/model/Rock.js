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
    define(['ApiClient', 'model/NameId', 'model/PermissionDto', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NameId'), require('./PermissionDto'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.Rock = factory(root.TractionToolsApiV1.ApiClient, root.TractionToolsApiV1.NameId, root.TractionToolsApiV1.PermissionDto, root.TractionToolsApiV1.User);
  }
}(this, function(ApiClient, NameId, PermissionDto, User) {
  'use strict';




  /**
   * The Rock model module.
   * @module model/Rock
   * @version v1
   */

  /**
   * Constructs a new <code>Rock</code>.
   * @alias module:model/Rock
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Rock</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rock} obj Optional instance to populate.
   * @return {module:model/Rock} The populated <code>Rock</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('Key')) {
        obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Owner')) {
        obj['Owner'] = User.constructFromObject(data['Owner']);
      }
      if (data.hasOwnProperty('DueDate')) {
        obj['DueDate'] = ApiClient.convertToType(data['DueDate'], 'Date');
      }
      if (data.hasOwnProperty('Complete')) {
        obj['Complete'] = ApiClient.convertToType(data['Complete'], 'Boolean');
      }
      if (data.hasOwnProperty('Completion')) {
        obj['Completion'] = ApiClient.convertToType(data['Completion'], 'String');
      }
      if (data.hasOwnProperty('CreateTime')) {
        obj['CreateTime'] = ApiClient.convertToType(data['CreateTime'], 'Date');
      }
      if (data.hasOwnProperty('Archived')) {
        obj['Archived'] = ApiClient.convertToType(data['Archived'], 'Boolean');
      }
      if (data.hasOwnProperty('Permission')) {
        obj['Permission'] = PermissionDto.constructFromObject(data['Permission']);
      }
      if (data.hasOwnProperty('Origins')) {
        obj['Origins'] = ApiClient.convertToType(data['Origins'], [NameId]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {String} Key
   */
  exports.prototype['Key'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {module:model/User} Owner
   */
  exports.prototype['Owner'] = undefined;
  /**
   * @member {Date} DueDate
   */
  exports.prototype['DueDate'] = undefined;
  /**
   * @member {Boolean} Complete
   */
  exports.prototype['Complete'] = undefined;
  /**
   * @member {module:model/Rock.CompletionEnum} Completion
   */
  exports.prototype['Completion'] = undefined;
  /**
   * @member {Date} CreateTime
   */
  exports.prototype['CreateTime'] = undefined;
  /**
   * @member {Boolean} Archived
   */
  exports.prototype['Archived'] = undefined;
  /**
   * @member {module:model/PermissionDto} Permission
   */
  exports.prototype['Permission'] = undefined;
  /**
   * @member {Array.<module:model/NameId>} Origins
   */
  exports.prototype['Origins'] = undefined;


  /**
   * Allowed values for the <code>Completion</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CompletionEnum = {
    /**
     * value: "Indeterminate"
     * @const
     */
    "Indeterminate": "Indeterminate",
    /**
     * value: "AtRisk"
     * @const
     */
    "AtRisk": "AtRisk",
    /**
     * value: "OnTrack"
     * @const
     */
    "OnTrack": "OnTrack",
    /**
     * value: "Complete"
     * @const
     */
    "Complete": "Complete"  };


  return exports;
}));


