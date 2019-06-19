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
    instance = new TractionToolsApiV1.UpdateMeasurable();
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

  describe('UpdateMeasurable', function() {
    it('should create an instance of UpdateMeasurable', function() {
      // uncomment below and update the code to test UpdateMeasurable
      //var instance = new TractionToolsApiV1.UpdateMeasurable();
      //expect(instance).to.be.a(TractionToolsApiV1.UpdateMeasurable);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new TractionToolsApiV1.UpdateMeasurable();
      //expect(instance).to.be();
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instance = new TractionToolsApiV1.UpdateMeasurable();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instance = new TractionToolsApiV1.UpdateMeasurable();
      //expect(instance).to.be();
    });

    it('should have the property unitType (base name: "unitType")', function() {
      // uncomment below and update the code to test the property unitType
      //var instance = new TractionToolsApiV1.UpdateMeasurable();
      //expect(instance).to.be();
    });

    it('should have the property altTarget (base name: "altTarget")', function() {
      // uncomment below and update the code to test the property altTarget
      //var instance = new TractionToolsApiV1.UpdateMeasurable();
      //expect(instance).to.be();
    });

  });

}));
