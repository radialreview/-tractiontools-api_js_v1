# TractionToolsApiV1.L10Api

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**l10AddAttendee**](L10Api.md#l10AddAttendee) | **POST** /api/v1/L10/{MEETING_ID}/attendees/{USER_ID} | Add an existing user to a Level 10 meeting
[**l10AttachMeasurableL10**](L10Api.md#l10AttachMeasurableL10) | **POST** /api/v1/L10/{MEETING_ID}/measurables/{MEASURABLE_ID} | Add an existing scorecard measurable to a Level 10 meeting
[**l10AttachRockMeetingL10**](L10Api.md#l10AttachRockMeetingL10) | **POST** /api/v1/L10/{MEETING_ID}/rocks/{ROCK_ID} | Add an existing rock to a Level 10 meeting
[**l10CreateHeadlineL10**](L10Api.md#l10CreateHeadlineL10) | **POST** /api/v1/L10/{MEETING_ID}/headlines | Create a people headline for a Level 10 meeting
[**l10CreateIssueL10**](L10Api.md#l10CreateIssueL10) | **POST** /api/v1/L10/{MEETING_ID}/issues | Add an issue to a Level 10 meeting
[**l10CreateL10**](L10Api.md#l10CreateL10) | **POST** /api/v1/L10/create | Create a new Level 10 meeting.
[**l10CreateRockL10**](L10Api.md#l10CreateRockL10) | **POST** /api/v1/L10/{MEETING_ID}/rocks | Create a new rock and move it to L10 meeting
[**l10CreateTodoL10**](L10Api.md#l10CreateTodoL10) | **POST** /api/v1/L10/{MEETING_ID}/todos | Add a to-do to a Level 10 meeting
[**l10EditL10**](L10Api.md#l10EditL10) | **PUT** /api/v1/L10/{MEETING_ID} | Update a Level 10 meeting
[**l10GetL10**](L10Api.md#l10GetL10) | **GET** /api/v1/L10/{MEETING_ID} | Get information about a Level 10 meeting
[**l10GetL10Attendees**](L10Api.md#l10GetL10Attendees) | **GET** /api/v1/L10/{MEETING_ID}/attendees | Get a list of attendees
[**l10GetL10List**](L10Api.md#l10GetL10List) | **GET** /api/v1/L10/list | Get a list of Level 10 meetings
[**l10GetL10Rocks**](L10Api.md#l10GetL10Rocks) | **GET** /api/v1/L10/{MEETING_ID}/rocks | Get list of L10 rocks
[**l10GetRecurrenceHeadlines**](L10Api.md#l10GetRecurrenceHeadlines) | **GET** /api/v1/l10/{MEETING_ID}/headlines | Get a list of people headlines in a Level 10 meeting
[**l10GetRecurrenceIssues**](L10Api.md#l10GetRecurrenceIssues) | **GET** /api/v1/l10/{MEETING_ID}/issues | Get a list of issues for a Level 10 meeting
[**l10GetRecurrenceTodos**](L10Api.md#l10GetRecurrenceTodos) | **GET** /api/v1/l10/{MEETING_ID}/todos | Get a list of to-dos in a Level 10 meeting
[**l10GetUserHeadlines**](L10Api.md#l10GetUserHeadlines) | **GET** /api/v1/l10/{MEETING_ID}/users/{USER_ID}/headlines | Get a list of headlines in a Level 10 meeting for a particular user
[**l10GetUserIssues**](L10Api.md#l10GetUserIssues) | **GET** /api/v1/l10/{MEETING_ID}/users/{USER_ID}/issues | Get a list of issues in a Level 10 meeting for a particular user
[**l10GetUserL10List**](L10Api.md#l10GetUserL10List) | **GET** /api/v1/L10/{USER_ID}/list | Get list of L10 meetings attended by a particular user
[**l10GetUserMeasurables**](L10Api.md#l10GetUserMeasurables) | **GET** /api/v1/l10/{MEETING_ID}/users/{USER_ID}/measurables | Get a list of measurables in a Level 10 meeting for a particular user
[**l10GetUserRocks**](L10Api.md#l10GetUserRocks) | **GET** /api/v1/l10/{MEETING_ID}/users/{USER_ID}/rocks | Get a list of rocks in a Level 10 meeting for a particular user
[**l10GetUserTodos**](L10Api.md#l10GetUserTodos) | **GET** /api/v1/l10/{MEETING_ID}/users/{USER_ID}/todos | Get a list of todos in a Level 10 meeting for a particular user
[**l10RemoveHeadlineL10**](L10Api.md#l10RemoveHeadlineL10) | **DELETE** /api/v1/L10/{MEETING_ID}/headlines/{HEADLINE_ID} | Remove a headline from a Level 10 meeting
[**l10RemoveIssueL10**](L10Api.md#l10RemoveIssueL10) | **DELETE** /api/v1/L10/{MEETING_ID}/issues/{ISSUE_ID} | Remove an issue from a Level 10 meeting
[**l10RemoveL10**](L10Api.md#l10RemoveL10) | **DELETE** /api/v1/L10/{MEETING_ID} | Delete a Level 10 meeting
[**l10RemoveMeasurableL10**](L10Api.md#l10RemoveMeasurableL10) | **DELETE** /api/v1/L10/{MEETING_ID}/measurables/{MEASURABLE_ID} | Remove a scorecard measurable from a Level 10 meeting
[**l10RemoveRockL10**](L10Api.md#l10RemoveRockL10) | **DELETE** /api/v1/L10/{MEETING_ID}/rocks/{ROCK_ID} | Remove a rock from a Level 10 meeting


<a name="l10AddAttendee"></a>
# **l10AddAttendee**
> l10AddAttendee(MEETING_ID, USER_ID)

Add an existing user to a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var USER_ID = 789; // Number | User ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.l10AddAttendee(MEETING_ID, USER_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **USER_ID** | **Number**| User ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="l10AttachMeasurableL10"></a>
# **l10AttachMeasurableL10**
> l10AttachMeasurableL10(MEETING_ID, MEASURABLE_ID)

Add an existing scorecard measurable to a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var MEASURABLE_ID = 789; // Number | Scorecard measurable ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.l10AttachMeasurableL10(MEETING_ID, MEASURABLE_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **MEASURABLE_ID** | **Number**| Scorecard measurable ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="l10AttachRockMeetingL10"></a>
# **l10AttachRockMeetingL10**
> l10AttachRockMeetingL10(MEETING_ID, ROCK_ID)

Add an existing rock to a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var ROCK_ID = 789; // Number | Rock ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.l10AttachRockMeetingL10(MEETING_ID, ROCK_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **ROCK_ID** | **Number**| Rock ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="l10CreateHeadlineL10"></a>
# **l10CreateHeadlineL10**
> Headline l10CreateHeadlineL10(MEETING_ID, body)

Create a people headline for a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var body = new TractionToolsApiV1.CreateHeadline(); // CreateHeadline | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10CreateHeadlineL10(MEETING_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **body** | [**CreateHeadline**](CreateHeadline.md)|  | 

### Return type

[**Headline**](Headline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="l10CreateIssueL10"></a>
# **l10CreateIssueL10**
> Issue l10CreateIssueL10(MEETING_ID, body)

Add an issue to a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var body = new TractionToolsApiV1.CreateIssue_(); // CreateIssue_ | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10CreateIssueL10(MEETING_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **body** | [**CreateIssue_**](CreateIssue_.md)|  | 

### Return type

[**Issue**](Issue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="l10CreateL10"></a>
# **l10CreateL10**
> CreatedMeeting l10CreateL10(body)

Create a new Level 10 meeting.

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var body = new TractionToolsApiV1.CreateMeeting(); // CreateMeeting | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10CreateL10(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateMeeting**](CreateMeeting.md)|  | 

### Return type

[**CreatedMeeting**](CreatedMeeting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="l10CreateRockL10"></a>
# **l10CreateRockL10**
> Rock l10CreateRockL10(MEETING_ID, body)

Create a new rock and move it to L10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var body = new TractionToolsApiV1.CreateRock(); // CreateRock | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10CreateRockL10(MEETING_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **body** | [**CreateRock**](CreateRock.md)|  | 

### Return type

[**Rock**](Rock.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="l10CreateTodoL10"></a>
# **l10CreateTodoL10**
> Todo l10CreateTodoL10(MEETING_ID, body)

Add a to-do to a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var body = new TractionToolsApiV1.CreateTodo(); // CreateTodo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10CreateTodoL10(MEETING_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **body** | [**CreateTodo**](CreateTodo.md)|  | 

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="l10EditL10"></a>
# **l10EditL10**
> l10EditL10(MEETING_ID, body)

Update a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var body = new TractionToolsApiV1.Title(); // Title | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.l10EditL10(MEETING_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **body** | [**Title**](Title.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="l10GetL10"></a>
# **l10GetL10**
> Meeting l10GetL10(MEETING_ID)

Get information about a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetL10(MEETING_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 

### Return type

[**Meeting**](Meeting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetL10Attendees"></a>
# **l10GetL10Attendees**
> [User] l10GetL10Attendees(MEETING_ID)

Get a list of attendees

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetL10Attendees(MEETING_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetL10List"></a>
# **l10GetL10List**
> [NameId] l10GetL10List()

Get a list of Level 10 meetings

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetL10List(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[NameId]**](NameId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetL10Rocks"></a>
# **l10GetL10Rocks**
> [Rock] l10GetL10Rocks(MEETING_ID, opts)

Get list of L10 rocks

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var opts = { 
  'INCLUDE_ARCHIVE': true // Boolean | Include Archive  (Default: false)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetL10Rocks(MEETING_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **INCLUDE_ARCHIVE** | **Boolean**| Include Archive  (Default: false) | [optional] 

### Return type

[**[Rock]**](Rock.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetRecurrenceHeadlines"></a>
# **l10GetRecurrenceHeadlines**
> [Headline] l10GetRecurrenceHeadlines(MEETING_ID)

Get a list of people headlines in a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetRecurrenceHeadlines(MEETING_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 

### Return type

[**[Headline]**](Headline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetRecurrenceIssues"></a>
# **l10GetRecurrenceIssues**
> [Issue] l10GetRecurrenceIssues(MEETING_ID, opts)

Get a list of issues for a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting Id

var opts = { 
  'INCLUDE_RESOLVED': true // Boolean | Issue Status whether solved or unresolve (Default: false)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetRecurrenceIssues(MEETING_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting Id | 
 **INCLUDE_RESOLVED** | **Boolean**| Issue Status whether solved or unresolve (Default: false) | [optional] 

### Return type

[**[Issue]**](Issue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetRecurrenceTodos"></a>
# **l10GetRecurrenceTodos**
> [Todo] l10GetRecurrenceTodos(MEETING_ID, opts)

Get a list of to-dos in a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var opts = { 
  'INCLUDE_CLOSED': true // Boolean | Todo Status whether closed or open (Default: false)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetRecurrenceTodos(MEETING_ID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **INCLUDE_CLOSED** | **Boolean**| Todo Status whether closed or open (Default: false) | [optional] 

### Return type

[**[Todo]**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetUserHeadlines"></a>
# **l10GetUserHeadlines**
> [Headline] l10GetUserHeadlines(USER_ID, MEETING_ID)

Get a list of headlines in a Level 10 meeting for a particular user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var USER_ID = 789; // Number | 

var MEETING_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetUserHeadlines(USER_ID, MEETING_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**|  | 
 **MEETING_ID** | **Number**|  | 

### Return type

[**[Headline]**](Headline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetUserIssues"></a>
# **l10GetUserIssues**
> [Issue] l10GetUserIssues(USER_ID, MEETING_ID)

Get a list of issues in a Level 10 meeting for a particular user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var USER_ID = 789; // Number | 

var MEETING_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetUserIssues(USER_ID, MEETING_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**|  | 
 **MEETING_ID** | **Number**|  | 

### Return type

[**[Issue]**](Issue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetUserL10List"></a>
# **l10GetUserL10List**
> [NameId] l10GetUserL10List(USER_ID)

Get list of L10 meetings attended by a particular user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var USER_ID = 789; // Number | User Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetUserL10List(USER_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**| User Id | 

### Return type

[**[NameId]**](NameId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetUserMeasurables"></a>
# **l10GetUserMeasurables**
> [Measurable] l10GetUserMeasurables(USER_ID, MEETING_ID)

Get a list of measurables in a Level 10 meeting for a particular user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var USER_ID = 789; // Number | 

var MEETING_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetUserMeasurables(USER_ID, MEETING_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**|  | 
 **MEETING_ID** | **Number**|  | 

### Return type

[**[Measurable]**](Measurable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetUserRocks"></a>
# **l10GetUserRocks**
> [Rock] l10GetUserRocks(USER_ID, MEETING_ID)

Get a list of rocks in a Level 10 meeting for a particular user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var USER_ID = 789; // Number | 

var MEETING_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetUserRocks(USER_ID, MEETING_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**|  | 
 **MEETING_ID** | **Number**|  | 

### Return type

[**[Rock]**](Rock.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10GetUserTodos"></a>
# **l10GetUserTodos**
> [Todo] l10GetUserTodos(USER_ID, MEETING_ID)

Get a list of todos in a Level 10 meeting for a particular user

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var USER_ID = 789; // Number | 

var MEETING_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.l10GetUserTodos(USER_ID, MEETING_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **USER_ID** | **Number**|  | 
 **MEETING_ID** | **Number**|  | 

### Return type

[**[Todo]**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="l10RemoveHeadlineL10"></a>
# **l10RemoveHeadlineL10**
> l10RemoveHeadlineL10(MEETING_ID, HEADLINE_ID)

Remove a headline from a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var HEADLINE_ID = 789; // Number | People headline ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.l10RemoveHeadlineL10(MEETING_ID, HEADLINE_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **HEADLINE_ID** | **Number**| People headline ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="l10RemoveIssueL10"></a>
# **l10RemoveIssueL10**
> l10RemoveIssueL10(MEETING_ID, ISSUE_ID)

Remove an issue from a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var ISSUE_ID = 789; // Number | Issue ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.l10RemoveIssueL10(MEETING_ID, ISSUE_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **ISSUE_ID** | **Number**| Issue ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="l10RemoveL10"></a>
# **l10RemoveL10**
> l10RemoveL10(MEETING_ID)

Delete a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.l10RemoveL10(MEETING_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="l10RemoveMeasurableL10"></a>
# **l10RemoveMeasurableL10**
> l10RemoveMeasurableL10(MEETING_ID, MEASURABLE_ID)

Remove a scorecard measurable from a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var MEASURABLE_ID = 789; // Number | Scorecard measurable ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.l10RemoveMeasurableL10(MEETING_ID, MEASURABLE_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **MEASURABLE_ID** | **Number**| Scorecard measurable ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="l10RemoveRockL10"></a>
# **l10RemoveRockL10**
> l10RemoveRockL10(MEETING_ID, ROCK_ID)

Remove a rock from a Level 10 meeting

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.L10Api();

var MEETING_ID = 789; // Number | Meeting ID

var ROCK_ID = 789; // Number | Rock ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.l10RemoveRockL10(MEETING_ID, ROCK_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MEETING_ID** | **Number**| Meeting ID | 
 **ROCK_ID** | **Number**| Rock ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

