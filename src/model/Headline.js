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
    define(['ApiClient', 'model/PermissionDto', 'model/Picture', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PermissionDto'), require('./Picture'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.Headline = factory(root.TractionToolsApiV1.ApiClient, root.TractionToolsApiV1.PermissionDto, root.TractionToolsApiV1.Picture, root.TractionToolsApiV1.User);
  }
}(this, function(ApiClient, PermissionDto, Picture, User) {
  'use strict';




  /**
   * The Headline model module.
   * @module model/Headline
   * @version v1
   */

  /**
   * Constructs a new <code>Headline</code>.
   * @alias module:model/Headline
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Headline</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Headline} obj Optional instance to populate.
   * @return {module:model/Headline} The populated <code>Headline</code> instance.
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
      if (data.hasOwnProperty('DetailsUrl')) {
        obj['DetailsUrl'] = ApiClient.convertToType(data['DetailsUrl'], 'String');
      }
      if (data.hasOwnProperty('Owner')) {
        obj['Owner'] = User.constructFromObject(data['Owner']);
      }
      if (data.hasOwnProperty('CloseTime')) {
        obj['CloseTime'] = ApiClient.convertToType(data['CloseTime'], 'Date');
      }
      if (data.hasOwnProperty('CreateTime')) {
        obj['CreateTime'] = ApiClient.convertToType(data['CreateTime'], 'Date');
      }
      if (data.hasOwnProperty('About')) {
        obj['About'] = Picture.constructFromObject(data['About']);
      }
      if (data.hasOwnProperty('Archived')) {
        obj['Archived'] = ApiClient.convertToType(data['Archived'], 'Boolean');
      }
      if (data.hasOwnProperty('Permission')) {
        obj['Permission'] = PermissionDto.constructFromObject(data['Permission']);
      }
      if (data.hasOwnProperty('Origin')) {
        obj['Origin'] = ApiClient.convertToType(data['Origin'], 'String');
      }
      if (data.hasOwnProperty('OriginId')) {
        obj['OriginId'] = ApiClient.convertToType(data['OriginId'], 'Number');
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
   * @member {String} DetailsUrl
   */
  exports.prototype['DetailsUrl'] = undefined;
  /**
   * @member {module:model/User} Owner
   */
  exports.prototype['Owner'] = undefined;
  /**
   * @member {Date} CloseTime
   */
  exports.prototype['CloseTime'] = undefined;
  /**
   * @member {Date} CreateTime
   */
  exports.prototype['CreateTime'] = undefined;
  /**
   * @member {module:model/Picture} About
   */
  exports.prototype['About'] = undefined;
  /**
   * @member {Boolean} Archived
   */
  exports.prototype['Archived'] = undefined;
  /**
   * @member {module:model/PermissionDto} Permission
   */
  exports.prototype['Permission'] = undefined;
  /**
   * @member {String} Origin
   */
  exports.prototype['Origin'] = undefined;
  /**
   * @member {Number} OriginId
   */
  exports.prototype['OriginId'] = undefined;



  return exports;
}));


