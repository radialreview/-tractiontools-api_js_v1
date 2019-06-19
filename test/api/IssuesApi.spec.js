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
    instance = new TractionToolsApiV1.IssuesApi();
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

  describe('IssuesApi', function() {
    describe('issuesComplete', function() {
      it('should call issuesComplete successfully', function(done) {
        //uncomment below and update the code to test issuesComplete
        //instance.issuesComplete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuesCreateIssue', function() {
      it('should call issuesCreateIssue successfully', function(done) {
        //uncomment below and update the code to test issuesCreateIssue
        //instance.issuesCreateIssue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuesEditIssue', function() {
      it('should call issuesEditIssue successfully', function(done) {
        //uncomment below and update the code to test issuesEditIssue
        //instance.issuesEditIssue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuesGet', function() {
      it('should call issuesGet successfully', function(done) {
        //uncomment below and update the code to test issuesGet
        //instance.issuesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuesGetMineIssues', function() {
      it('should call issuesGetMineIssues successfully', function(done) {
        //uncomment below and update the code to test issuesGetMineIssues
        //instance.issuesGetMineIssues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuesGetUserIssues', function() {
      it('should call issuesGetUserIssues successfully', function(done) {
        //uncomment below and update the code to test issuesGetUserIssues
        //instance.issuesGetUserIssues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuesMoveFromVto', function() {
      it('should call issuesMoveFromVto successfully', function(done) {
        //uncomment below and update the code to test issuesMoveFromVto
        //instance.issuesMoveFromVto(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuesMoveToMeeting', function() {
      it('should call issuesMoveToMeeting successfully', function(done) {
        //uncomment below and update the code to test issuesMoveToMeeting
        //instance.issuesMoveToMeeting(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuesMoveToVto', function() {
      it('should call issuesMoveToVto successfully', function(done) {
        //uncomment below and update the code to test issuesMoveToVto
        //instance.issuesMoveToVto(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
