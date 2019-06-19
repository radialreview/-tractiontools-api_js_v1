# TractionToolsApiV1.RocksApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rocksAddRocksMilestones**](RocksApi.md#rocksAddRocksMilestones) | **POST** /api/v1/rocks/{ROCK_ID}/milestones | Add a milestone to a particular rock
[**rocksArchiveRock**](RocksApi.md#rocksArchiveRock) | **PUT** /api/v1/rocks/{ROCK_ID}/archive | Archive the rock
[**rocksCreateRock**](RocksApi.md#rocksCreateRock) | **POST** /api/v1/rocks/create | Create a new rock
[**rocksDeleteRocks**](RocksApi.md#rocksDeleteRocks) | **DELETE** /api/v1/rocks/{ROCK_ID} | Delete a rock
[**rocksGetArchivedRocksForUser**](RocksApi.md#rocksGetArchivedRocksForUser) | **GET** /api/v1/archivedrocks/user/{USER_ID} | Get a list of archived rocks for a user
[**rocksGetRock**](RocksApi.md#rocksGetRock) | **GET** /api/v1/rocks/{ROCK_ID} | Get a specific rock
[**rocksGetRocksForUser**](RocksApi.md#rocksGetRocksForUser) | **GET** /api/v1/rocks/user/{USER_ID} | Get a list of rocks for a user
[**rocksGetRocksMilestones**](RocksApi.md#rocksGetRocksMilestones) | **GET** /api/v1/rocks/{ROCK_ID}/milestones | Get milestones for a particular rock
[**rocksGetYourArchivedRocks**](RocksApi.md#rocksGetYourArchivedRocks) | **GET** /api/v1/archivedrocks/user/mine | Get a list of your archived rocks
[**rocksGetYourRocks**](RocksApi.md#rocksGetYourRocks) | **GET** /api/v1/rocks/user/mine | Get a list of your rocks
[**rocksRestoreRock**](RocksApi.md#rocksRestoreRock) | **PUT** /api/v1/rocks/{ROCK_ID}/restore | Restore a rock from the archive
[**rocksUpdateRocks**](RocksApi.md#rocksUpdateRocks) | **PUT** /api/v1/rocks/{ROCK_ID} | Update a rock


<a name="rocksAddRocksMilestones"></a>
# **rocksAddRocksMilestones**
> Milestone rocksAddRocksMilestones(ROCK_ID, body, opts)

Add a milestone to a particular rock

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var ROCK_ID = 789; // Number | Rock ID

var body = new TractionToolsApiV1.CreateMilestone(); // CreateMilestone | 

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rocksAddRocksMilestones(ROCK_ID, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ROCK_ID** | **Number**| Rock ID | 
 **body** | [**CreateMilestone**](CreateMilestone.md)|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**Milestone**](Milestone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="rocksArchiveRock"></a>
# **rocksArchiveRock**
> rocksArchiveRock(ROCK_ID, opts)

Archive the rock

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var ROCK_ID = 789; // Number | Rock ID

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
apiInstance.rocksArchiveRock(ROCK_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ROCK_ID** | **Number**| Rock ID | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rocksCreateRock"></a>
# **rocksCreateRock**
> Rock rocksCreateRock(body, opts)

Create a new rock

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var body = new TractionToolsApiV1.CreateRockModel_(); // CreateRockModel_ | 

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rocksCreateRock(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateRockModel_**](CreateRockModel_.md)|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**Rock**](Rock.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="rocksDeleteRocks"></a>
# **rocksDeleteRocks**
> rocksDeleteRocks(ROCK_ID, opts)

Delete a rock

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var ROCK_ID = 789; // Number | Rock ID

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
apiInstance.rocksDeleteRocks(ROCK_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ROCK_ID** | **Number**| Rock ID | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rocksGetArchivedRocksForUser"></a>
# **rocksGetArchivedRocksForUser**
> [Rock] rocksGetArchivedRocksForUser(USER_ID, opts)

Get a list of archived rocks for a user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var USER_ID = 789; // Number | User ID

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rocksGetArchivedRocksForUser(USER_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**| User ID | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Rock]**](Rock.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="rocksGetRock"></a>
# **rocksGetRock**
> Rock rocksGetRock(ROCK_ID, opts)

Get a specific rock

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var ROCK_ID = 789; // Number | Rock ID

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
apiInstance.rocksGetRock(ROCK_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ROCK_ID** | **Number**| Rock ID | 
 **includeOrigin** | **Boolean**|  | [optional] 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**Rock**](Rock.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="rocksGetRocksForUser"></a>
# **rocksGetRocksForUser**
> [Rock] rocksGetRocksForUser(USER_ID, opts)

Get a list of rocks for a user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var USER_ID = 789; // Number | User ID

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
apiInstance.rocksGetRocksForUser(USER_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**| User ID | 
 **includeOrigin** | **Boolean**|  | [optional] 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Rock]**](Rock.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="rocksGetRocksMilestones"></a>
# **rocksGetRocksMilestones**
> [Milestone] rocksGetRocksMilestones(ROCK_ID, opts)

Get milestones for a particular rock

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var ROCK_ID = 789; // Number | Rock ID

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rocksGetRocksMilestones(ROCK_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ROCK_ID** | **Number**| Rock ID | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Milestone]**](Milestone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="rocksGetYourArchivedRocks"></a>
# **rocksGetYourArchivedRocks**
> [Rock] rocksGetYourArchivedRocks(opts)

Get a list of your archived rocks

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var opts = { 
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rocksGetYourArchivedRocks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Rock]**](Rock.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="rocksGetYourRocks"></a>
# **rocksGetYourRocks**
> [Rock] rocksGetYourRocks(opts)

Get a list of your rocks

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

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
apiInstance.rocksGetYourRocks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeOrigin** | **Boolean**|  | [optional] 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Rock]**](Rock.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="rocksRestoreRock"></a>
# **rocksRestoreRock**
> rocksRestoreRock(ROCK_ID, opts)

Restore a rock from the archive

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var ROCK_ID = 789; // Number | Rock ID

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
apiInstance.rocksRestoreRock(ROCK_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ROCK_ID** | **Number**| Rock ID | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rocksUpdateRocks"></a>
# **rocksUpdateRocks**
> rocksUpdateRocks(ROCK_ID, body, opts)

Update a rock

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.RocksApi();

var ROCK_ID = 789; // Number | Rock ID

var body = new TractionToolsApiV1.UpdateRock(); // UpdateRock | 

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
apiInstance.rocksUpdateRocks(ROCK_ID, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ROCK_ID** | **Number**| Rock ID | 
 **body** | [**UpdateRock**](UpdateRock.md)|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

