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
    define(['ApiClient', 'model/Headline', 'model/IssuesList', 'model/MeetingNotes', 'model/Page', 'model/Rock', 'model/Scorecard', 'model/Settings', 'model/Todo', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Headline'), require('./IssuesList'), require('./MeetingNotes'), require('./Page'), require('./Rock'), require('./Scorecard'), require('./Settings'), require('./Todo'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.TractionToolsApiV1) {
      root.TractionToolsApiV1 = {};
    }
    root.TractionToolsApiV1.Meeting = factory(root.TractionToolsApiV1.ApiClient, root.TractionToolsApiV1.Headline, root.TractionToolsApiV1.IssuesList, root.TractionToolsApiV1.MeetingNotes, root.TractionToolsApiV1.Page, root.TractionToolsApiV1.Rock, root.TractionToolsApiV1.Scorecard, root.TractionToolsApiV1.Settings, root.TractionToolsApiV1.Todo, root.TractionToolsApiV1.User);
  }
}(this, function(ApiClient, Headline, IssuesList, MeetingNotes, Page, Rock, Scorecard, Settings, Todo, User) {
  'use strict';




  /**
   * The Meeting model module.
   * @module model/Meeting
   * @version v1
   */

  /**
   * Constructs a new <code>Meeting</code>.
   * @alias module:model/Meeting
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>Meeting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Meeting} obj Optional instance to populate.
   * @return {module:model/Meeting} The populated <code>Meeting</code> instance.
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
      if (data.hasOwnProperty('CreateTime')) {
        obj['CreateTime'] = ApiClient.convertToType(data['CreateTime'], 'Date');
      }
      if (data.hasOwnProperty('CreatedBy')) {
        obj['CreatedBy'] = User.constructFromObject(data['CreatedBy']);
      }
      if (data.hasOwnProperty('Basics')) {
        obj['Basics'] = Settings.constructFromObject(data['Basics']);
      }
      if (data.hasOwnProperty('Attendees')) {
        obj['Attendees'] = ApiClient.convertToType(data['Attendees'], [User]);
      }
      if (data.hasOwnProperty('Scorecard')) {
        obj['Scorecard'] = Scorecard.constructFromObject(data['Scorecard']);
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], [MeetingNotes]);
      }
      if (data.hasOwnProperty('Rocks')) {
        obj['Rocks'] = ApiClient.convertToType(data['Rocks'], [Rock]);
      }
      if (data.hasOwnProperty('Todos')) {
        obj['Todos'] = ApiClient.convertToType(data['Todos'], [Todo]);
      }
      if (data.hasOwnProperty('Milestones')) {
        obj['Milestones'] = ApiClient.convertToType(data['Milestones'], [Todo]);
      }
      if (data.hasOwnProperty('Headlines')) {
        obj['Headlines'] = ApiClient.convertToType(data['Headlines'], [Headline]);
      }
      if (data.hasOwnProperty('IssuesList')) {
        obj['IssuesList'] = IssuesList.constructFromObject(data['IssuesList']);
      }
      if (data.hasOwnProperty('HeadlinesUrl')) {
        obj['HeadlinesUrl'] = ApiClient.convertToType(data['HeadlinesUrl'], 'String');
      }
      if (data.hasOwnProperty('HeadlineType')) {
        obj['HeadlineType'] = ApiClient.convertToType(data['HeadlineType'], 'String');
      }
      if (data.hasOwnProperty('VtoId')) {
        obj['VtoId'] = ApiClient.convertToType(data['VtoId'], 'Number');
      }
      if (data.hasOwnProperty('Pages')) {
        obj['Pages'] = ApiClient.convertToType(data['Pages'], [Page]);
      }
      if (data.hasOwnProperty('MeetingType')) {
        obj['MeetingType'] = ApiClient.convertToType(data['MeetingType'], 'String');
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
   * @member {Date} CreateTime
   */
  exports.prototype['CreateTime'] = undefined;
  /**
   * @member {module:model/User} CreatedBy
   */
  exports.prototype['CreatedBy'] = undefined;
  /**
   * @member {module:model/Settings} Basics
   */
  exports.prototype['Basics'] = undefined;
  /**
   * @member {Array.<module:model/User>} Attendees
   */
  exports.prototype['Attendees'] = undefined;
  /**
   * @member {module:model/Scorecard} Scorecard
   */
  exports.prototype['Scorecard'] = undefined;
  /**
   * @member {Array.<module:model/MeetingNotes>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {Array.<module:model/Rock>} Rocks
   */
  exports.prototype['Rocks'] = undefined;
  /**
   * @member {Array.<module:model/Todo>} Todos
   */
  exports.prototype['Todos'] = undefined;
  /**
   * @member {Array.<module:model/Todo>} Milestones
   */
  exports.prototype['Milestones'] = undefined;
  /**
   * @member {Array.<module:model/Headline>} Headlines
   */
  exports.prototype['Headlines'] = undefined;
  /**
   * @member {module:model/IssuesList} IssuesList
   */
  exports.prototype['IssuesList'] = undefined;
  /**
   * @member {String} HeadlinesUrl
   */
  exports.prototype['HeadlinesUrl'] = undefined;
  /**
   * @member {module:model/Meeting.HeadlineTypeEnum} HeadlineType
   */
  exports.prototype['HeadlineType'] = undefined;
  /**
   * @member {Number} VtoId
   */
  exports.prototype['VtoId'] = undefined;
  /**
   * @member {Array.<module:model/Page>} Pages
   */
  exports.prototype['Pages'] = undefined;
  /**
   * @member {module:model/Meeting.MeetingTypeEnum} MeetingType
   */
  exports.prototype['MeetingType'] = undefined;


  /**
   * Allowed values for the <code>HeadlineType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HeadlineTypeEnum = {
    /**
     * value: "None"
     * @const
     */
    "None": "None",
    /**
     * value: "HeadlinesBox"
     * @const
     */
    "HeadlinesBox": "HeadlinesBox",
    /**
     * value: "HeadlinesList"
     * @const
     */
    "HeadlinesList": "HeadlinesList"  };

  /**
   * Allowed values for the <code>MeetingType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MeetingTypeEnum = {
    /**
     * value: "L10"
     * @const
     */
    "L10": "L10",
    /**
     * value: "SamePage"
     * @const
     */
    "SamePage": "SamePage"  };


  return exports;
}));


