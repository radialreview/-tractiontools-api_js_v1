# TractionToolsApiV1.Measurable

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**type** | **String** |  | [optional] 
**key** | **String** |  | [optional] 
**owner** | [**User**](User.md) |  | [optional] 
**admin** | [**User**](User.md) |  | [optional] 
**target** | **Number** |  | [optional] 
**altTarget** | **Number** |  | [optional] 
**direction** | **String** |  | [optional] 
**isDivider** | **Boolean** |  | [optional] 
**isReorderable** | **Boolean** |  | [optional] 
**showCumulative** | **Boolean** |  | [optional] 
**cumulative** | **Number** |  | [optional] 
**cumulativeRange** | **Date** |  | [optional] 
**modifiers** | **String** |  | [optional] 
**ordering** | **Number** |  | [optional] 
**disabled** | **Boolean** |  | [optional] 
**generated** | **Boolean** |  | [optional] 
**isFormula** | **Boolean** |  | [optional] 
**average** | **Number** |  | [optional] 
**showAverage** | **Boolean** |  | [optional] 
**averageRange** | **Date** |  | [optional] 
**permission** | [**PermissionDto**](PermissionDto.md) |  | [optional] 
**origins** | [**[NameId]**](NameId.md) |  | [optional] 


<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `LessThanOrEqual` (value: `"LessThanOrEqual"`)

* `LessThan` (value: `"LessThan"`)

* `GreaterThan` (value: `"GreaterThan"`)

* `EqualTo` (value: `"EqualTo"`)

* `GreaterThanNotEqual` (value: `"GreaterThanNotEqual"`)

* `Between` (value: `"Between"`)




<a name="ModifiersEnum"></a>
## Enum: ModifiersEnum


* `None` (value: `"None"`)

* `Dollar` (value: `"Dollar"`)

* `Percent` (value: `"Percent"`)

* `Pound` (value: `"Pound"`)

* `Euros` (value: `"Euros"`)




