# TractionToolsApiV1.HeadlinesApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**headlinesGetHeadline**](HeadlinesApi.md#headlinesGetHeadline) | **GET** /api/v1/headline/{HEADLINE_ID} | Get a specific people headline
[**headlinesGetMineHeadlines**](HeadlinesApi.md#headlinesGetMineHeadlines) | **GET** /api/v1/headline/users/mine | Get headlines you own
[**headlinesGetUserHeadlines**](HeadlinesApi.md#headlinesGetUserHeadlines) | **GET** /api/v1/headline/users/{USER_ID} | Get all headlines owned by a user.
[**headlinesRemoveHeadlines**](HeadlinesApi.md#headlinesRemoveHeadlines) | **DELETE** /api/v1/headline/{HEADLINE_ID} | Delete a people headline
[**headlinesUpdateHeadlines**](HeadlinesApi.md#headlinesUpdateHeadlines) | **PUT** /api/v1/headline/{HEADLINE_ID} | Update a People Headline


<a name="headlinesGetHeadline"></a>
# **headlinesGetHeadline**
> Headline headlinesGetHeadline(HEADLINE_ID, opts)

Get a specific people headline

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.HeadlinesApi();

var HEADLINE_ID = 789; // Number | People headline ID

var opts = { 
  'includeOrigin': true, // Boolean | 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.headlinesGetHeadline(HEADLINE_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HEADLINE_ID** | **Number**| People headline ID | 
 **includeOrigin** | **Boolean**|  | [optional] 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**Headline**](Headline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="headlinesGetMineHeadlines"></a>
# **headlinesGetMineHeadlines**
> [Headline] headlinesGetMineHeadlines(opts)

Get headlines you own

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.HeadlinesApi();

var opts = { 
  'includeOrigin': true, // Boolean | 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.headlinesGetMineHeadlines(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeOrigin** | **Boolean**|  | [optional] 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Headline]**](Headline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="headlinesGetUserHeadlines"></a>
# **headlinesGetUserHeadlines**
> [Headline] headlinesGetUserHeadlines(USER_ID, opts)

Get all headlines owned by a user.

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.HeadlinesApi();

var USER_ID = 789; // Number | 

var opts = { 
  'includeOrigin': true, // Boolean | 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.headlinesGetUserHeadlines(USER_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**|  | 
 **includeOrigin** | **Boolean**|  | [optional] 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Headline]**](Headline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="headlinesRemoveHeadlines"></a>
# **headlinesRemoveHeadlines**
> headlinesRemoveHeadlines(HEADLINE_ID, opts)

Delete a people headline

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.HeadlinesApi();

var HEADLINE_ID = 789; // Number | 

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
apiInstance.headlinesRemoveHeadlines(HEADLINE_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HEADLINE_ID** | **Number**|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="headlinesUpdateHeadlines"></a>
# **headlinesUpdateHeadlines**
> headlinesUpdateHeadlines(HEADLINE_ID, body, opts)

Update a People Headline

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.HeadlinesApi();

var HEADLINE_ID = 789; // Number | People headline ID

var body = new TractionToolsApiV1.Title(); // Title | 

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
apiInstance.headlinesUpdateHeadlines(HEADLINE_ID, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **HEADLINE_ID** | **Number**| People headline ID | 
 **body** | [**Title**](Title.md)|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

