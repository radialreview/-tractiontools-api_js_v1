# TractionToolsApiV1.RoleApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roleGetRoles**](RoleApi.md#roleGetRoles) | **GET** /api/v1/role/{ROLE_ID} | Get a particular role
[**roleRemoveRoles**](RoleApi.md#roleRemoveRoles) | **DELETE** /api/v1/role/{ROLE_ID} | Remove a role from a position
[**roleUpdateRoles**](RoleApi.md#roleUpdateRoles) | **PUT** /api/v1/role/{ROLE_ID} | Update a role


<a name="roleGetRoles"></a>
# **roleGetRoles**
> Role roleGetRoles(ROLE_ID)

Get a particular role

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RoleApi();

var ROLE_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.roleGetRoles(ROLE_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ROLE_ID** | **Number**|  | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="roleRemoveRoles"></a>
# **roleRemoveRoles**
> roleRemoveRoles(ROLE_ID)

Remove a role from a position

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RoleApi();

var ROLE_ID = 789; // Number | Role ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.roleRemoveRoles(ROLE_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ROLE_ID** | **Number**| Role ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="roleUpdateRoles"></a>
# **roleUpdateRoles**
> roleUpdateRoles(ROLE_ID, body)

Update a role

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RoleApi();

var ROLE_ID = 789; // Number | 

var body = new TractionToolsApiV1.Title(); // Title | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.roleUpdateRoles(ROLE_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ROLE_ID** | **Number**|  | 
 **body** | [**Title**](Title.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

