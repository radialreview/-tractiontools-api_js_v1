# TractionToolsApiV1.IssuesApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuesComplete**](IssuesApi.md#issuesComplete) | **POST** /api/v1/issues/{ISSUE_ID}/complete | Mark issue as completed
[**issuesCreateIssue**](IssuesApi.md#issuesCreateIssue) | **POST** /api/v1/issues/create | Create a new issue in for a Level 10
[**issuesEditIssue**](IssuesApi.md#issuesEditIssue) | **PUT** /api/v1/issues/{ISSUE_ID} | Update an issue
[**issuesGet**](IssuesApi.md#issuesGet) | **GET** /api/v1/issues/{ISSUE_ID} | Get a specific issue
[**issuesGetMineIssues**](IssuesApi.md#issuesGetMineIssues) | **GET** /api/v1/issues/users/mine | Get all issues you own.
[**issuesGetUserIssues**](IssuesApi.md#issuesGetUserIssues) | **GET** /api/v1/issues/users/{USER_ID} | Get all issues owned by a user.
[**issuesMoveFromVto**](IssuesApi.md#issuesMoveFromVto) | **POST** /api/v1/issues/{ISSUE_ID}/movefromvto | Move issue from VTO
[**issuesMoveToMeeting**](IssuesApi.md#issuesMoveToMeeting) | **POST** /api/v1/issues/{ISSUE_ID}/movetomeeting/{MEETING_ID} | Move issue to another meeting
[**issuesMoveToVto**](IssuesApi.md#issuesMoveToVto) | **POST** /api/v1/issues/{ISSUE_ID}/movetovto | Move issue to VTO


<a name="issuesComplete"></a>
# **issuesComplete**
> Object issuesComplete(ISSUE_ID, body, opts)

Mark issue as completed

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.IssuesApi();

var ISSUE_ID = 789; // Number | 

var body = new TractionToolsApiV1.UpdateIssueModelCompletion(); // UpdateIssueModelCompletion | 

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesComplete(ISSUE_ID, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ISSUE_ID** | **Number**|  | 
 **body** | [**UpdateIssueModelCompletion**](UpdateIssueModelCompletion.md)|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="issuesCreateIssue"></a>
# **issuesCreateIssue**
> Issue issuesCreateIssue(body, opts)

Create a new issue in for a Level 10

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.IssuesApi();

var body = new TractionToolsApiV1.CreateIssue(); // CreateIssue | 

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesCreateIssue(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateIssue**](CreateIssue.md)|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**Issue**](Issue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="issuesEditIssue"></a>
# **issuesEditIssue**
> issuesEditIssue(ISSUE_ID, body, opts)

Update an issue

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.IssuesApi();

var ISSUE_ID = 789; // Number | Issue ID

var body = new TractionToolsApiV1.UpdateIssue(); // UpdateIssue | 

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.issuesEditIssue(ISSUE_ID, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ISSUE_ID** | **Number**| Issue ID | 
 **body** | [**UpdateIssue**](UpdateIssue.md)|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="issuesGet"></a>
# **issuesGet**
> Issue issuesGet(ISSUE_ID, opts)

Get a specific issue

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.IssuesApi();

var ISSUE_ID = 789; // Number | Issue ID

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesGet(ISSUE_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ISSUE_ID** | **Number**| Issue ID | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**Issue**](Issue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="issuesGetMineIssues"></a>
# **issuesGetMineIssues**
> [Issue] issuesGetMineIssues(opts)

Get all issues you own.

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.IssuesApi();

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesGetMineIssues(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Issue]**](Issue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="issuesGetUserIssues"></a>
# **issuesGetUserIssues**
> [Issue] issuesGetUserIssues(USER_ID, opts)

Get all issues owned by a user.

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.IssuesApi();

var USER_ID = 789; // Number | 

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesGetUserIssues(USER_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Issue]**](Issue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="issuesMoveFromVto"></a>
# **issuesMoveFromVto**
> Object issuesMoveFromVto(ISSUE_ID, opts)

Move issue from VTO

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.IssuesApi();

var ISSUE_ID = 789; // Number | 

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesMoveFromVto(ISSUE_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ISSUE_ID** | **Number**|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="issuesMoveToMeeting"></a>
# **issuesMoveToMeeting**
> Object issuesMoveToMeeting(ISSUE_ID, MEETING_ID, opts)

Move issue to another meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.IssuesApi();

var ISSUE_ID = 789; // Number | 

var MEETING_ID = 789; // Number | 

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesMoveToMeeting(ISSUE_ID, MEETING_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ISSUE_ID** | **Number**|  | 
 **MEETING_ID** | **Number**|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="issuesMoveToVto"></a>
# **issuesMoveToVto**
> Object issuesMoveToVto(ISSUE_ID, opts)

Move issue to VTO

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.IssuesApi();

var ISSUE_ID = 789; // Number | 

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issuesMoveToVto(ISSUE_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ISSUE_ID** | **Number**|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

