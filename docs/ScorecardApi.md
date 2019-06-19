# TractionToolsApiV1.ScorecardApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scorecardGetMeasureablesForUser**](ScorecardApi.md#scorecardGetMeasureablesForUser) | **GET** /api/v1/scorecard/user/{USER_ID} | 
[**scorecardGetMineMeasureables**](ScorecardApi.md#scorecardGetMineMeasureables) | **GET** /api/v1/scorecard/user/mine | 
[**scorecardGetScorecardForMeeting**](ScorecardApi.md#scorecardGetScorecardForMeeting) | **GET** /api/v1/scorecard/meeting/{MEETING_ID} | 


<a name="scorecardGetMeasureablesForUser"></a>
# **scorecardGetMeasureablesForUser**
> Scorecard scorecardGetMeasureablesForUser(USER_ID)



### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.ScorecardApi();

var USER_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scorecardGetMeasureablesForUser(USER_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**|  | 

### Return type

[**Scorecard**](Scorecard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="scorecardGetMineMeasureables"></a>
# **scorecardGetMineMeasureables**
> Scorecard scorecardGetMineMeasureables()



### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.ScorecardApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scorecardGetMineMeasureables(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Scorecard**](Scorecard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="scorecardGetScorecardForMeeting"></a>
# **scorecardGetScorecardForMeeting**
> Scorecard scorecardGetScorecardForMeeting(MEETING_ID)



### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.ScorecardApi();

var MEETING_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scorecardGetScorecardForMeeting(MEETING_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**|  | 

### Return type

[**Scorecard**](Scorecard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

