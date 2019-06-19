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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TractionToolsApiV1);
  }
}(this, function(expect, TractionToolsApiV1) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TractionToolsApiV1.MeasurableOrder();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MeasurableOrder', function() {
    it('should create an instance of MeasurableOrder', function() {
      // uncomment below and update the code to test MeasurableOrder
      //var instance = new TractionToolsApiV1.MeasurableOrder();
      //expect(instance).to.be.a(TractionToolsApiV1.MeasurableOrder);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TractionToolsApiV1.MeasurableOrder();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "Type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new TractionToolsApiV1.MeasurableOrder();
      //expect(instance).to.be();
    });

    it('should have the property scorecardId (base name: "ScorecardId")', function() {
      // uncomment below and update the code to test the property scorecardId
      //var instance = new TractionToolsApiV1.MeasurableOrder();
      //expect(instance).to.be();
    });

    it('should have the property measurableId (base name: "MeasurableId")', function() {
      // uncomment below and update the code to test the property measurableId
      //var instance = new TractionToolsApiV1.MeasurableOrder();
      //expect(instance).to.be();
    });

    it('should have the property ordering (base name: "Ordering")', function() {
      // uncomment below and update the code to test the property ordering
      //var instance = new TractionToolsApiV1.MeasurableOrder();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "Key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new TractionToolsApiV1.MeasurableOrder();
      //expect(instance).to.be();
    });

  });

}));
