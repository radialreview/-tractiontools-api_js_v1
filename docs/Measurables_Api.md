# TractionToolsApiV1.Measurables_Api

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**measurablesCreateMeasurable**](Measurables_Api.md#measurablesCreateMeasurable) | **POST** /api/v1/measurables/create | Create a new measurable
[**measurablesGet**](Measurables_Api.md#measurablesGet) | **GET** /api/v1/measurables/{MEASURABLE_ID} | Get a measurable
[**measurablesGetMeasurableScores**](Measurables_Api.md#measurablesGetMeasurableScores) | **GET** /api/v1/measurables/{MEASURABLE_ID}/scores | Get scores for a particular measurable
[**measurablesGetMineMeasureables**](Measurables_Api.md#measurablesGetMineMeasureables) | **GET** /api/v1/measurables/user/mine | Get measurables that you own
[**measurablesGetUserMeasureables**](Measurables_Api.md#measurablesGetUserMeasureables) | **GET** /api/v1/measurables/user/{USER_ID} | Get measurables for a particular user
[**measurablesUpdateMeasurable**](Measurables_Api.md#measurablesUpdateMeasurable) | **PUT** /api/v1/measurables/{MEASURABLE_ID} | Update a measureable
[**measurablesUpdateScore**](Measurables_Api.md#measurablesUpdateScore) | **PUT** /api/v1/measurables/{MEASURABLE_ID}/week/{WEEK_ID} | Update a score for a particular measureable


<a name="measurablesCreateMeasurable"></a>
# **measurablesCreateMeasurable**
> Measurable measurablesCreateMeasurable(body)

Create a new measurable

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Measurables_Api();

var body = new TractionToolsApiV1.CreateMeasurable(); // CreateMeasurable | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.measurablesCreateMeasurable(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateMeasurable**](CreateMeasurable.md)|  | 

### Return type

[**Measurable**](Measurable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="measurablesGet"></a>
# **measurablesGet**
> Measurable measurablesGet(MEASURABLE_ID, opts)

Get a measurable

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Measurables_Api();

var MEASURABLE_ID = 789; // Number | Measurable ID

var opts = { 
  'includeOrigin': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.measurablesGet(MEASURABLE_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEASURABLE_ID** | **Number**| Measurable ID | 
 **includeOrigin** | **Boolean**|  | [optional] 

### Return type

[**Measurable**](Measurable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="measurablesGetMeasurableScores"></a>
# **measurablesGetMeasurableScores**
> [Score] measurablesGetMeasurableScores(MEASURABLE_ID)

Get scores for a particular measurable

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Measurables_Api();

var MEASURABLE_ID = 789; // Number | Measurable ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.measurablesGetMeasurableScores(MEASURABLE_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEASURABLE_ID** | **Number**| Measurable ID | 

### Return type

[**[Score]**](Score.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="measurablesGetMineMeasureables"></a>
# **measurablesGetMineMeasureables**
> [Measurable] measurablesGetMineMeasureables(opts)

Get measurables that you own

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Measurables_Api();

var opts = { 
  'includeOrigin': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.measurablesGetMineMeasureables(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeOrigin** | **Boolean**|  | [optional] 

### Return type

[**[Measurable]**](Measurable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="measurablesGetUserMeasureables"></a>
# **measurablesGetUserMeasureables**
> [Measurable] measurablesGetUserMeasureables(USER_ID, opts)

Get measurables for a particular user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Measurables_Api();

var USER_ID = 789; // Number | User ID

var opts = { 
  'includeOrigin': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.measurablesGetUserMeasureables(USER_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**| User ID | 
 **includeOrigin** | **Boolean**|  | [optional] 

### Return type

[**[Measurable]**](Measurable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="measurablesUpdateMeasurable"></a>
# **measurablesUpdateMeasurable**
> measurablesUpdateMeasurable(MEASURABLE_ID, body)

Update a measureable

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Measurables_Api();

var MEASURABLE_ID = 789; // Number | Measurable ID

var body = new TractionToolsApiV1.UpdateMeasurable(); // UpdateMeasurable | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.measurablesUpdateMeasurable(MEASURABLE_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEASURABLE_ID** | **Number**| Measurable ID | 
 **body** | [**UpdateMeasurable**](UpdateMeasurable.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="measurablesUpdateScore"></a>
# **measurablesUpdateScore**
> measurablesUpdateScore(MEASURABLE_ID, WEEK_ID, body)

Update a score for a particular measureable

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Measurables_Api();

var MEASURABLE_ID = 789; // Number | Measurable ID

var WEEK_ID = 789; // Number | Week ID

var body = new TractionToolsApiV1.UpdateScore(); // UpdateScore | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.measurablesUpdateScore(MEASURABLE_ID, WEEK_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEASURABLE_ID** | **Number**| Measurable ID | 
 **WEEK_ID** | **Number**| Week ID | 
 **body** | [**UpdateScore**](UpdateScore.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

