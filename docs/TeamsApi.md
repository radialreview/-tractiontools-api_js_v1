# TractionToolsApiV1.TeamsApi

All URIs are relative to *https://tt-devs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsAddTeam**](TeamsApi.md#teamsAddTeam) | **POST** /api/v1/teams/create | Create a new team
[**teamsAddTeamMember**](TeamsApi.md#teamsAddTeamMember) | **POST** /api/v1/teams/{TEAM_ID}/member/{USER_ID} | Add a user to a team
[**teamsGetTeamMembers**](TeamsApi.md#teamsGetTeamMembers) | **GET** /api/v1/teams/{TEAM_ID}/members | Get team members
[**teamsGetTeams**](TeamsApi.md#teamsGetTeams) | **GET** /api/v1/teams/{TEAM_ID} | Get a particular team
[**teamsRemoveTeamMember**](TeamsApi.md#teamsRemoveTeamMember) | **DELETE** /api/v1/teams/{TEAM_ID}/member/{USER_ID} | Remove a team member
[**teamsUpdateTeam**](TeamsApi.md#teamsUpdateTeam) | **PUT** /api/v1/teams/{TEAM_ID} | Update a team


<a name="teamsAddTeam"></a>
# **teamsAddTeam**
> Team teamsAddTeam(body)

Create a new team

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TeamsApi();

var body = new TractionToolsApiV1.Title(); // Title | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsAddTeam(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Title**](Title.md)|  | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="teamsAddTeamMember"></a>
# **teamsAddTeamMember**
> &#39;Boolean&#39; teamsAddTeamMember(TEAM_ID, USER_ID)

Add a user to a team

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TeamsApi();

var TEAM_ID = 789; // Number | Team ID

var USER_ID = 789; // Number | User ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsAddTeamMember(TEAM_ID, USER_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TEAM_ID** | **Number**| Team ID | 
 **USER_ID** | **Number**| User ID | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="teamsGetTeamMembers"></a>
# **teamsGetTeamMembers**
> [User] teamsGetTeamMembers(TEAM_ID)

Get team members

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TeamsApi();

var TEAM_ID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsGetTeamMembers(TEAM_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TEAM_ID** | **Number**|  | 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="teamsGetTeams"></a>
# **teamsGetTeams**
> Team teamsGetTeams(TEAM_ID)

Get a particular team

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TeamsApi();

var TEAM_ID = 789; // Number | Team ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsGetTeams(TEAM_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TEAM_ID** | **Number**| Team ID | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="teamsRemoveTeamMember"></a>
# **teamsRemoveTeamMember**
> &#39;Boolean&#39; teamsRemoveTeamMember(TEAM_ID, USER_ID)

Remove a team member

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TeamsApi();

var TEAM_ID = 789; // Number | Team ID

var USER_ID = 789; // Number | User ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsRemoveTeamMember(TEAM_ID, USER_ID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TEAM_ID** | **Number**| Team ID | 
 **USER_ID** | **Number**| User ID | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="teamsUpdateTeam"></a>
# **teamsUpdateTeam**
> Team teamsUpdateTeam(TEAM_ID, body)

Update a team

### Example
```javascript
var TractionToolsApiV1 = require('traction_tools_api___v1');

var apiInstance = new TractionToolsApiV1.TeamsApi();

var TEAM_ID = 789; // Number | Team ID

var body = new TractionToolsApiV1.Title(); // Title | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsUpdateTeam(TEAM_ID, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TEAM_ID** | **Number**| Team ID | 
 **body** | [**Title**](Title.md)|  | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

