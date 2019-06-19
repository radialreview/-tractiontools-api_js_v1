# TractionToolsApiV1.TodosApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**todosCreateTodo**](TodosApi.md#todosCreateTodo) | **POST** /api/v1/todo/create | Create a personal to-do
[**todosEditTodo**](TodosApi.md#todosEditTodo) | **PUT** /api/v1/todo/{TODO_ID} | Update a to-do
[**todosGet**](TodosApi.md#todosGet) | **GET** /api/v1/todo/{TODO_ID} | Get a particular to-do
[**todosGetMineTodos**](TodosApi.md#todosGetMineTodos) | **GET** /api/v1/todo/users/mine | Get your to-dos
[**todosGetUserTodos**](TodosApi.md#todosGetUserTodos) | **GET** /api/v1/todo/user/{USER_ID} | Get to-dos for a user
[**todosMarkComplete**](TodosApi.md#todosMarkComplete) | **POST** /api/v1/todo/{TODO_ID}/complete | Update the completion of a to-do


<a name="todosCreateTodo"></a>
# **todosCreateTodo**
> Todo todosCreateTodo(body, opts)

Create a personal to-do

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TodosApi();

var body = new TractionToolsApiV1.CreateTodo_(); // CreateTodo_ | 

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
apiInstance.todosCreateTodo(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateTodo_**](CreateTodo_.md)|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="todosEditTodo"></a>
# **todosEditTodo**
> todosEditTodo(TODO_ID, body, opts)

Update a to-do

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TodosApi();

var TODO_ID = 789; // Number | Todo ID

var body = new TractionToolsApiV1.UpdateTodo(); // UpdateTodo | 

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
apiInstance.todosEditTodo(TODO_ID, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TODO_ID** | **Number**| Todo ID | 
 **body** | [**UpdateTodo**](UpdateTodo.md)|  | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="todosGet"></a>
# **todosGet**
> Todo todosGet(TODO_ID, opts)

Get a particular to-do

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TodosApi();

var TODO_ID = 789; // Number | Todo ID

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
apiInstance.todosGet(TODO_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TODO_ID** | **Number**| Todo ID | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="todosGetMineTodos"></a>
# **todosGetMineTodos**
> [Todo] todosGetMineTodos(opts)

Get your to-dos

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TodosApi();

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
apiInstance.todosGetMineTodos(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Todo]**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="todosGetUserTodos"></a>
# **todosGetUserTodos**
> [Todo] todosGetUserTodos(USER_ID, opts)

Get to-dos for a user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TodosApi();

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
apiInstance.todosGetUserTodos(USER_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**| User ID | 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

[**[Todo]**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="todosMarkComplete"></a>
# **todosMarkComplete**
> &#39;Boolean&#39; todosMarkComplete(TODO_ID, opts)

Update the completion of a to-do

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TodosApi();

var TODO_ID = 789; // Number | Todo ID

var opts = { 
  'status': true, // Boolean | Is completed (Default: true)
  'includePermission': true // Boolean | Include permission in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.todosMarkComplete(TODO_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TODO_ID** | **Number**| Todo ID | 
 **status** | **Boolean**| Is completed (Default: true) | [optional] 
 **includePermission** | **Boolean**| Include permission in the response | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

