/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.3.1(undefined)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/languages/css/common/cssWorker.nls", {
	"vs/languages/css/common/cssWorker": [
		"@keyframes {0}",
		"@font-face",
		"Rename to '{0}'"
	],
	"vs/languages/css/common/parser/cssErrors": [
		"number expected",
		"condition expected",
		"at-rule or selector expected",
		"dot expected",
		"colon expected",
		"semi-colon expected",
		"term expected",
		"expression expected",
		"operator expected",
		"identifier expected",
		"percentage expected",
		"uri or string expected",
		"URI expected",
		"variable name expected",
		"variable value expected",
		"property value expected",
		"{ expected",
		"} expected",
		"[ expected",
		"] expected",
		"( expected",
		") expected",
		"comma expected",
		"page directive or declaraton expected",
		"at-rule unknown",
		"unknown keyword",
		"selector expected",
		"string literal expected"
	],
	"vs/languages/css/common/services/intelliSense": [
		"Creates a Color from red, green, and blue values.",
		"Creates a Color from red, green, blue, and alpha values.",
		"Creates a Color from hue, saturation, and lightness values.",
		"Creates a Color from hue, saturation, lightness, and alpha values."
	],
	"vs/languages/css/common/services/lint": [
		"'{0}'",
		"{0}, '{1}'",
		"Always define standard rule '@keyframes' when defining keyframes.",
		"Always include all vendor specific rules: Missing: {0}",
		"Also define the standard property '{0}' for compatibility",
		"Always include all vendor specific properties: Missing: {0}"
	],
	"vs/languages/css/common/services/lintRules": [
		"When using a vendor-specific prefix make sure to also include all other vendor-specific properties",
		"When using a vendor-specific prefix also include the standard property",
		"Do not use duplicate style definitions",
		"Do not use empty rulesets",
		"Import statements do not load in parallel",
		"Do not use width or height when using padding or border",
		"The universal selector (*) is known to be slow",
		"No unit for zero needed",
		"@font-face rule must define 'src' and 'font-family' properties",
		"Hex colors must consist of three or six hex numbers",
		"Invalid number of parameters",
		"Unknown property.",
		"IE hacks are only necessary when supporting IE7 and older",
		"Unknown vendor specific property.",
		"Property is ignored due to the display. E.g. with 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect",
		"Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.",
		"Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.",
		"Selectors should not contain IDs because these rules are too tightly coupled with the HTML.",
		"Enables or disables all validations"
	]
});