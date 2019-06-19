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
    instance = new TractionToolsApiV1.Rock();
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

  describe('Rock', function() {
    it('should create an instance of Rock', function() {
      // uncomment below and update the code to test Rock
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be.a(TractionToolsApiV1.Rock);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "Type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "Key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "Owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "DueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property complete (base name: "Complete")', function() {
      // uncomment below and update the code to test the property complete
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property completion (base name: "Completion")', function() {
      // uncomment below and update the code to test the property completion
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property createTime (base name: "CreateTime")', function() {
      // uncomment below and update the code to test the property createTime
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property archived (base name: "Archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property permission (base name: "Permission")', function() {
      // uncomment below and update the code to test the property permission
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

    it('should have the property origins (base name: "Origins")', function() {
      // uncomment below and update the code to test the property origins
      //var instance = new TractionToolsApiV1.Rock();
      //expect(instance).to.be();
    });

  });

}));
