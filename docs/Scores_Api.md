# TractionToolsApiV1.Scores_Api

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scoresGet**](Scores_Api.md#scoresGet) | **GET** /api/v1/scores/{SCORE_ID} | Get a particular score
[**scoresPut**](Scores_Api.md#scoresPut) | **PUT** /api/v1/scores/{SCORE_ID} | Update a score


<a name="scoresGet"></a>
# **scoresGet**
> Score scoresGet(SCORE_ID)

Get a particular score

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Scores_Api();

var SCORE_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scoresGet(SCORE_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SCORE_ID** | **Number**|  | 

### Return type

[**Score**](Score.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="scoresPut"></a>
# **scoresPut**
> scoresPut(SCORE_ID, body)

Update a score

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Scores_Api();

var SCORE_ID = 789; // Number | Score ID

var body = new TractionToolsApiV1.UpdateScore(); // UpdateScore | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.scoresPut(SCORE_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SCORE_ID** | **Number**| Score ID | 
 **body** | [**UpdateScore**](UpdateScore.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

