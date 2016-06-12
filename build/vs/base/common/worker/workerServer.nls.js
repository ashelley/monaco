/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.3.1(undefined)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/base/common/worker/workerServer.nls", {
	"vs/base/common/errors": [
		"{0}. Error code: {1}",
		"Permission Denied (HTTP {0})",
		"Permission Denied",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"Unknown Connection Error ({0})",
		"An unknown connection error occurred. Either you are no longer connected to the internet or the server you are connected to is offline.",
		"{0}: {1}",
		"An unknown error occurred. Please consult the log for more details.",
		"A system error occured ({0})",
		"An unknown error occurred. Please consult the log for more details.",
		"{0} ({1} errors in total)",
		"An unknown error occurred. Please consult the log for more details.",
		"Not Implemented",
		"Illegal argument: {0}",
		"Illegal argument",
		"Illegal state: {0}",
		"Illegal state",
		"Failed to load a required file. Either you are no longer connected to the internet or the server you are connected to is offline. Please refresh the browser to try again.",
		"Failed to load a required file. Please restart the application to try again. Details: {0}"
	],
	"vs/base/common/severity": [
		"Error",
		"Warning",
		"Info"
	],
	"vs/editor/common/config/defaultConfig": [
		"Editor content"
	],
	"vs/editor/common/model/textModelWithTokens": [
		"The mode has failed while tokenizing the input."
	],
	"vs/editor/common/modes/modesRegistry": [
		"Plain Text"
	],
	"vs/editor/common/modes/supports/suggestSupport": [
		"Enable word based suggestions."
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Contributes language declarations.",
		"ID of the language.",
		"Name aliases for the language.",
		"File extensions associated to the language.",
		"File names associated to the language.",
		"File name glob patterns associated to the language.",
		"Mime types associated to the language.",
		"A regular expression matching the first line of a file of the language.",
		"A relative path to a file containing configuration options for the language.",
		"Empty value for `contributes.{0}`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"Invalid `contributes.{0}`. Expected an array."
	],
	"vs/editor/common/services/modelServiceImpl": [
		"Please update your settings: `editor.detectIndentation` replaces `editor.tabSize`: \"auto\" or `editor.insertSpaces`: \"auto\""
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Contributes configuration settings.",
		"A summary of the settings. This label will be used in the settings file as separating comment.",
		"Description of the configuration properties.",
		"if set, 'configuration.type' must be set to 'object",
		"'configuration.title' must be a string",
		"'configuration.properties' must be an object"
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Extension `{1}` failed to activate. Reason: unknown dependency `{0}`.",
		"Extension `{1}` failed to activate. Reason: dependency `{0}` failed to activate.",
		"Extension `{0}` failed to activate. Reason: more than 10 levels of dependencies (most likely a dependency loop).",
		"Activating extension `{0}` failed: {1}."
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Got empty extension description",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `object`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"property `{0}` can be omitted or must be of type `string`",
		"Expected `main` ({0}) to be included inside extension's folder ({1}). This might make the extension non-portable.",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"The display name for the extension used in the VS Code gallery.",
		"The categories used by the VS Code gallery to categorize the extension.",
		"Banner used in the VS Code marketplace.",
		"The banner color on the VS Code marketplace page header.",
		"The color theme for the font used in the banner.",
		"The publisher of the VS Code extension.",
		"Activation events for the VS Code extension.",
		"Dependencies to other extensions. The identifier of an extension is always ${publisher}.${name}. For example: vscode.csharp.",
		"Script executed before the package is published as a VS Code extension.",
		"All contributions of the VS Code extension represented by this package."
	],
	"vs/platform/jsonschemas/common/jsonContributionRegistry": [
		"Describes a JSON file using a schema. See json-schema.org for more info.",
		"A unique identifier for the schema.",
		"The schema to verify this document against ",
		"A descriptive title of the element",
		"A long description of the element. Used in hover menus and suggestions.",
		"A default value. Used by suggestions.",
		"A number that should cleanly divide the current value (i.e. have no remainder)",
		"The maximum numerical value, inclusive by default.",
		"Makes the maximum property exclusive.",
		"The minimum numerical value, inclusive by default.",
		"Makes the minimum property exclusive.",
		"The maximum length of a string.",
		"The minimum length of a string.",
		"A regular expression to match the string against. It is not implicitly anchored.",
		"For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.",
		"For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.",
		"The maximum number of items that can be inside an array. Inclusive.",
		"The minimum number of items that can be inside an array. Inclusive.",
		"If all of the items in the array must be unique. Defaults to false.",
		"The maximum number of properties an object can have. Inclusive.",
		"The minimum number of properties an object can have. Inclusive.",
		"An array of strings that lists the names of all properties required on this object.",
		"Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail.",
		"Not used for validation. Place subschemas here that you wish to reference inline with $ref",
		"A map of property names to schemas for each property.",
		"A map of regular expressions on property names to schemas for matching properties.",
		"A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.",
		"The set of literal values that are valid",
		"Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.",
		"Describes the format expected for the value.",
		"An array of schemas, all of which must match.",
		"An array of schemas, where at least one must match.",
		"An array of schemas, exactly one of which must match.",
		"A schema which must not match."
	],
	"vs/platform/message/common/message": [
		"Close",
		"Cancel"
	]
});