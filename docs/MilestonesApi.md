# TractionToolsApiV1.MilestonesApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**milestonesGetMilestones**](MilestonesApi.md#milestonesGetMilestones) | **GET** /api/v1/milestones/{MILESTONE_ID} | Get a particular milestone
[**milestonesRemoveMilestones**](MilestonesApi.md#milestonesRemoveMilestones) | **DELETE** /api/v1/milestones/{MILESTONE_ID} | Delete a milestone
[**milestonesUpdateMilestones**](MilestonesApi.md#milestonesUpdateMilestones) | **PUT** /api/v1/milestones/{MILESTONE_ID} | Update a milestone


<a name="milestonesGetMilestones"></a>
# **milestonesGetMilestones**
> Milestone milestonesGetMilestones(MILESTONE_ID)

Get a particular milestone

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.MilestonesApi();

var MILESTONE_ID = 789; // Number | Milestone ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.milestonesGetMilestones(MILESTONE_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MILESTONE_ID** | **Number**| Milestone ID | 

### Return type

[**Milestone**](Milestone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="milestonesRemoveMilestones"></a>
# **milestonesRemoveMilestones**
> milestonesRemoveMilestones(MILESTONE_ID)

Delete a milestone

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.MilestonesApi();

var MILESTONE_ID = 789; // Number | Milestone ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.milestonesRemoveMilestones(MILESTONE_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MILESTONE_ID** | **Number**| Milestone ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="milestonesUpdateMilestones"></a>
# **milestonesUpdateMilestones**
> milestonesUpdateMilestones(MILESTONE_ID, body)

Update a milestone

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.MilestonesApi();

var MILESTONE_ID = 789; // Number | Milestone ID

var body = new TractionToolsApiV1.UpdateMilestone(); // UpdateMilestone | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.milestonesUpdateMilestones(MILESTONE_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MILESTONE_ID** | **Number**| Milestone ID | 
 **body** | [**UpdateMilestone**](UpdateMilestone.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

