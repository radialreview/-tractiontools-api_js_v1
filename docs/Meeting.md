# TractionToolsApiV1.Meeting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**type** | **String** |  | [optional] 
**key** | **String** |  | [optional] 
**createTime** | **Date** |  | [optional] 
**createdBy** | [**User**](User.md) |  | [optional] 
**basics** | [**Settings**](Settings.md) |  | [optional] 
**attendees** | [**[User]**](User.md) |  | [optional] 
**scorecard** | [**Scorecard**](Scorecard.md) |  | [optional] 
**notes** | [**[MeetingNotes]**](MeetingNotes.md) |  | [optional] 
**rocks** | [**[Rock]**](Rock.md) |  | [optional] 
**todos** | [**[Todo]**](Todo.md) |  | [optional] 
**milestones** | [**[Todo]**](Todo.md) |  | [optional] 
**headlines** | [**[Headline]**](Headline.md) |  | [optional] 
**issuesList** | [**IssuesList**](IssuesList.md) |  | [optional] 
**headlinesUrl** | **String** |  | [optional] 
**headlineType** | **String** |  | [optional] 
**vtoId** | **Number** |  | [optional] 
**pages** | [**[Page]**](Page.md) |  | [optional] 
**meetingType** | **String** |  | [optional] 


<a name="HeadlineTypeEnum"></a>
## Enum: HeadlineTypeEnum


* `None` (value: `"None"`)

* `HeadlinesBox` (value: `"HeadlinesBox"`)

* `HeadlinesList` (value: `"HeadlinesList"`)




<a name="MeetingTypeEnum"></a>
## Enum: MeetingTypeEnum


* `L10` (value: `"L10"`)

* `SamePage` (value: `"SamePage"`)




