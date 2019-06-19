# TractionToolsApiV1.Week_Api

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**weekGet**](Week_Api.md#weekGet) | **GET** /api/v1/weeks/current | Get the current week


<a name="weekGet"></a>
# **weekGet**
> Week weekGet()

Get the current week

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.Week_Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.weekGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Week**](Week.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

