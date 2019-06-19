# TractionToolsApiV1.Users_Api

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGetDirectReports**](Users_Api.md#usersGetDirectReports) | **GET** /api/v1/users/{userId}/directreports | Get direct reports for a particular user
[**usersGetMineDirectReports**](Users_Api.md#usersGetMineDirectReports) | **GET** /api/v1/users/minedirectreports | Get my direct reports
[**usersGetMineUser**](Users_Api.md#usersGetMineUser) | **GET** /api/v1/users/mine | 
[**usersGetMineViewable**](Users_Api.md#usersGetMineViewable) | **GET** /api/v1/users/mineviewable | Get all viewable users
[**usersGetUser**](Users_Api.md#usersGetUser) | **GET** /api/v1/users/{USER_ID} | 


<a name="usersGetDirectReports"></a>
# **usersGetDirectReports**
> [User] usersGetDirectReports(userId)

Get direct reports for a particular user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Users_Api();

var userId = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetDirectReports(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="usersGetMineDirectReports"></a>
# **usersGetMineDirectReports**
> [User] usersGetMineDirectReports()

Get my direct reports

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Users_Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetMineDirectReports(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="usersGetMineUser"></a>
# **usersGetMineUser**
> User usersGetMineUser()



### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Users_Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetMineUser(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="usersGetMineViewable"></a>
# **usersGetMineViewable**
> [User] usersGetMineViewable()

Get all viewable users

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Users_Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetMineViewable(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="usersGetUser"></a>
# **usersGetUser**
> User usersGetUser(USER_ID)



### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Users_Api();

var USER_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetUser(USER_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

