# TractionToolsApiV1.PositionApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**positionAddPositionRoles**](PositionApi.md#positionAddPositionRoles) | **POST** /api/v1/positions/{POSITION_ID}/roles | Create a role for a position
[**positionCreatePosition**](PositionApi.md#positionCreatePosition) | **POST** /api/v1/positions/create | Create a new position
[**positionGetMinePosition**](PositionApi.md#positionGetMinePosition) | **GET** /api/v1/positions/mine | List all your positions at the organization
[**positionGetPositionRoles**](PositionApi.md#positionGetPositionRoles) | **GET** /api/v1/positions/{POSITION_ID}/roles | Get a list of roles for a particular position
[**positionGetPositions**](PositionApi.md#positionGetPositions) | **GET** /api/v1/positions/{POSITION_ID} | Get a particular position
[**positionUpdatePositions**](PositionApi.md#positionUpdatePositions) | **PUT** /api/v1/positions/{POSITION_ID} | Update a position


<a name="positionAddPositionRoles"></a>
# **positionAddPositionRoles**
> Role positionAddPositionRoles(POSITION_ID, body)

Create a role for a position

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.PositionApi();

var POSITION_ID = 789; // Number | Position ID

var body = new TractionToolsApiV1.Title(); // Title | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.positionAddPositionRoles(POSITION_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **POSITION_ID** | **Number**| Position ID | 
 **body** | [**Title**](Title.md)|  | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="positionCreatePosition"></a>
# **positionCreatePosition**
> Position positionCreatePosition(body)

Create a new position

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.PositionApi();

var body = new TractionToolsApiV1.Title(); // Title | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.positionCreatePosition(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Title**](Title.md)|  | 

### Return type

[**Position**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="positionGetMinePosition"></a>
# **positionGetMinePosition**
> [Position] positionGetMinePosition()

List all your positions at the organization

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.PositionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.positionGetMinePosition(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Position]**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="positionGetPositionRoles"></a>
# **positionGetPositionRoles**
> [Role] positionGetPositionRoles(POSITION_ID)

Get a list of roles for a particular position

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.PositionApi();

var POSITION_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.positionGetPositionRoles(POSITION_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **POSITION_ID** | **Number**|  | 

### Return type

[**[Role]**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="positionGetPositions"></a>
# **positionGetPositions**
> Position positionGetPositions(POSITION_ID)

Get a particular position

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.PositionApi();

var POSITION_ID = 789; // Number | Position ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.positionGetPositions(POSITION_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **POSITION_ID** | **Number**| Position ID | 

### Return type

[**Position**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="positionUpdatePositions"></a>
# **positionUpdatePositions**
> positionUpdatePositions(POSITION_ID, body)

Update a position

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.PositionApi();

var POSITION_ID = 789; // Number | Position ID

var body = new TractionToolsApiV1.Title(); // Title | Position name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.positionUpdatePositions(POSITION_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **POSITION_ID** | **Number**| Position ID | 
 **body** | [**Title**](Title.md)| Position name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

