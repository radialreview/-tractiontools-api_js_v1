# TractionToolsApiV1.PostQuarterApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postQuarterCreate**](PostQuarterApi.md#postQuarterCreate) | **POST** /api/v1/postquarter/create | Create a new post quarter


<a name="postQuarterCreate"></a>
# **postQuarterCreate**
> &#39;Number&#39; postQuarterCreate(body)

Create a new post quarter

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.PostQuarterApi();

var body = new TractionToolsApiV1.CreateNewQuarter(); // CreateNewQuarter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postQuarterCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateNewQuarter**](CreateNewQuarter.md)|  | 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

