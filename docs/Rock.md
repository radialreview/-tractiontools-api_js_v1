# TractionToolsApiV1.Rock

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**type** | **String** |  | [optional] 
**key** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**owner** | [**User**](User.md) |  | [optional] 
**dueDate** | **Date** |  | [optional] 
**complete** | **Boolean** |  | [optional] 
**completion** | **String** |  | [optional] 
**createTime** | **Date** |  | [optional] 
**archived** | **Boolean** |  | [optional] 
**permission** | [**PermissionDto**](PermissionDto.md) |  | [optional] 
**origins** | [**[NameId]**](NameId.md) |  | [optional] 


<a name="CompletionEnum"></a>
## Enum: CompletionEnum


* `Indeterminate` (value: `"Indeterminate"`)

* `AtRisk` (value: `"AtRisk"`)

* `OnTrack` (value: `"OnTrack"`)

* `Complete` (value: `"Complete"`)




