# TractionToolsApiV1.SeatsApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**seatsAttachDirectReport**](SeatsApi.md#seatsAttachDirectReport) | **POST** /api/v1/seats/{SEAT_ID}/directreport/{USER_ID} | Add a user below a seat
[**seatsAttachPosition**](SeatsApi.md#seatsAttachPosition) | **POST** /api/v1/seats/{SEAT_ID}/position/{POSITION_ID} | Set the position for a seat
[**seatsAttachUser**](SeatsApi.md#seatsAttachUser) | **POST** /api/v1/seats/{SEAT_ID}/user/{USER_ID} | Set a user for a seat
[**seatsDetachUser**](SeatsApi.md#seatsDetachUser) | **DELETE** /api/v1/seats/{SEAT_ID}/user | Remove user from a seat
[**seatsGetPosition**](SeatsApi.md#seatsGetPosition) | **GET** /api/v1/seats/{SEAT_ID}/position | Get the position attached to a seat
[**seatsGetSeat**](SeatsApi.md#seatsGetSeat) | **GET** /api/v1/seats/{SEAT_ID} | Get a particular seat
[**seatsGetSeatUser**](SeatsApi.md#seatsGetSeatUser) | **GET** /api/v1/seats/{SEAT_ID}/user | Get the user for a seat
[**seatsGetSeatsForMe**](SeatsApi.md#seatsGetSeatsForMe) | **GET** /api/v1/seats/user/mine | Get your seats
[**seatsGetSeatsForUser**](SeatsApi.md#seatsGetSeatsForUser) | **GET** /api/v1/seats/user/{USER_ID} | Get seats for a user
[**seatsRemovePosition**](SeatsApi.md#seatsRemovePosition) | **DELETE** /api/v1/seats/{SEAT_ID}/position | Remove position for a seat
[**seatsRemoveSeat**](SeatsApi.md#seatsRemoveSeat) | **DELETE** /api/v1/seats/{SEAT_ID} | Delete a seat from the accountability chart


<a name="seatsAttachDirectReport"></a>
# **seatsAttachDirectReport**
> Seat seatsAttachDirectReport(SEAT_ID, USER_ID)

Add a user below a seat

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var SEAT_ID = 789; // Number | Seat ID

var USER_ID = 789; // Number | User ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.seatsAttachDirectReport(SEAT_ID, USER_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SEAT_ID** | **Number**| Seat ID | 
 **USER_ID** | **Number**| User ID | 

### Return type

[**Seat**](Seat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="seatsAttachPosition"></a>
# **seatsAttachPosition**
> seatsAttachPosition(SEAT_ID, POSITION_ID)

Set the position for a seat

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var SEAT_ID = 789; // Number | Seat ID

var POSITION_ID = 789; // Number | Position ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.seatsAttachPosition(SEAT_ID, POSITION_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SEAT_ID** | **Number**| Seat ID | 
 **POSITION_ID** | **Number**| Position ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seatsAttachUser"></a>
# **seatsAttachUser**
> seatsAttachUser(SEAT_ID, USER_ID)

Set a user for a seat

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var SEAT_ID = 789; // Number | Seat ID

var USER_ID = 789; // Number | User ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.seatsAttachUser(SEAT_ID, USER_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SEAT_ID** | **Number**| Seat ID | 
 **USER_ID** | **Number**| User ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seatsDetachUser"></a>
# **seatsDetachUser**
> seatsDetachUser(SEAT_ID)

Remove user from a seat

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var SEAT_ID = 789; // Number | Seat ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.seatsDetachUser(SEAT_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SEAT_ID** | **Number**| Seat ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seatsGetPosition"></a>
# **seatsGetPosition**
> Position seatsGetPosition(SEAT_ID)

Get the position attached to a seat

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var SEAT_ID = 789; // Number | Seat ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.seatsGetPosition(SEAT_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SEAT_ID** | **Number**| Seat ID | 

### Return type

[**Position**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="seatsGetSeat"></a>
# **seatsGetSeat**
> Seat seatsGetSeat(SEAT_ID)

Get a particular seat

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var SEAT_ID = 789; // Number | Seat ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.seatsGetSeat(SEAT_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SEAT_ID** | **Number**| Seat ID | 

### Return type

[**Seat**](Seat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="seatsGetSeatUser"></a>
# **seatsGetSeatUser**
> User seatsGetSeatUser(SEAT_ID)

Get the user for a seat

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var SEAT_ID = 789; // Number | Seat ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.seatsGetSeatUser(SEAT_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SEAT_ID** | **Number**| Seat ID | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="seatsGetSeatsForMe"></a>
# **seatsGetSeatsForMe**
> [Seat] seatsGetSeatsForMe()

Get your seats

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.seatsGetSeatsForMe(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Seat]**](Seat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="seatsGetSeatsForUser"></a>
# **seatsGetSeatsForUser**
> [Seat] seatsGetSeatsForUser(USER_ID)

Get seats for a user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var USER_ID = 789; // Number | User ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.seatsGetSeatsForUser(USER_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**| User ID | 

### Return type

[**[Seat]**](Seat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="seatsRemovePosition"></a>
# **seatsRemovePosition**
> seatsRemovePosition(SEAT_ID)

Remove position for a seat

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var SEAT_ID = 789; // Number | Seat ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.seatsRemovePosition(SEAT_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SEAT_ID** | **Number**| Seat ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seatsRemoveSeat"></a>
# **seatsRemoveSeat**
> seatsRemoveSeat(SEAT_ID)

Delete a seat from the accountability chart

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.SeatsApi();

var SEAT_ID = 789; // Number | Seat ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.seatsRemoveSeat(SEAT_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SEAT_ID** | **Number**| Seat ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

