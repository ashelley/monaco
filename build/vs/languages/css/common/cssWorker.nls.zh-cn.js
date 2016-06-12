/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.3.1(undefined)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/languages/css/common/cssWorker.nls.zh-cn", {
	"vs/languages/css/common/cssWorker": [
		"@keyframes {0}",
		"@font-face",
		"重命名为“{0}”",
	],
	"vs/languages/css/common/parser/cssErrors": [
		"应输入数字",
		"应输入条件",
		"应输入 at-rule 或选择器",
		"应输入圆点",
		"应输入冒号",
		"应输入分号",
		"应输入术语",
		"应输入表达式",
		"应输入运算符",
		"应输入标识符",
		"应输入百分比",
		"应输入 uri 或字符串",
		"应输入 URI",
		"应输入变量名",
		"应输入变量值",
		"应输入属性值",
		"应输入 {",
		"应输入 }",
		"应输入 [",
		"应输入 ]",
		"应输入 (",
		"应输入 )",
		"应输入逗号",
		"应输入页面指令或声明",
		"未知 at-rule",
		"未知关键字",
		"应输入选择器",
		"应输入字面字符串",
	],
	"vs/languages/css/common/services/intelliSense": [
		"使用红色、绿色和蓝色值创建颜色。",
		"使用红色、绿色、蓝色和 Alpha 值创建颜色。",
		"使用色调、饱和度和亮度值创建颜色。",
		"使用色调、饱和度、亮度和 Alpha 值创建颜色。",
	],
	"vs/languages/css/common/services/lint": [
		"“{0}”",
		"{0}，“{1}”",
		"定义关键帧时始终定义标准规则 \"@keyframes\"。",
		"始终包括所有供应商特定规则: 缺少: {0}",
		"还应定义兼容性的标准属性“{0}”",
		"始终包括所有供应商特定属性: 缺少: {0}",
	],
	"vs/languages/css/common/services/lintRules": [
		"使用供应商特定前缀时，确保同时包括所有其他供应商特定属性",
		"使用供应商特定前缀时，还应包括标准属性",
		"不要使用重复的样式定义",
		"不要使用空规则集",
		"Import 语句不会并行加载",
		"使用边距或边框时，不要使用宽度或高度",
		"已知通配选择符 (*) 慢",
		"零不需要单位",
		"@font-face 规则必须定义 \"src\" 和 \"font-family\" 属性",
		"十六进制颜色必须由三个或六个十六进制数字组成",
		"参数数量无效",
		"未知的属性。",
		"仅当支持 IE7 及更低版本时，才需要 IE hack",
		"未知的供应商特定属性。",
		"因显示而忽略属性。例如，使用 \"display: inline\"时，宽度、高度、上边距、下边距和 float 属性将不起作用",
		"避免使用 !important。它表明整个 CSS 的特异性已经失去控制且需要重构。",
		"避免使用“float”。浮动会带来脆弱的 CSS，如果布局的某一方面更改，将很容易破坏 CSS。",
		"选择器不应包含 ID，因为这些规则与 HTML 的耦合过于紧密。",
		"启用或禁用所有验证",
	]
});