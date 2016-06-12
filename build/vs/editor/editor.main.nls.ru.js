/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.3.1(undefined)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/editor/editor.main.nls.ru", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})",
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (произошло снова)",
	],
	"vs/base/browser/ui/findinput/findInput": [
		"Использовать регулярное выражение",
		"Слово целиком",
		"С учетом регистра",
		"ввод",
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Ошибка: {0}",
		"Предупреждение: {0}",
		"Сведения: {0}",
	],
	"vs/base/common/errors": [
		"{0}. Код ошибки: {1}",
		"Отказано в разрешении (HTTP {0})",
		"Отказано в разрешении",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"Неизвестная ошибка подключения ({0})",
		"Произошла неизвестная ошибка подключения. Утеряно подключение к Интернету, либо сервер, к которому вы подключены, перешел в автономный режим.",
		"{0}: {1}",
		"Произошла неизвестная ошибка. Подробные сведения см. в журнале.",
		"Произошла системная ошибка ({0})",
		"Произошла неизвестная ошибка. Подробные сведения см. в журнале.",
		"{0} (всего ошибок: {1})",
		"Произошла неизвестная ошибка. Подробные сведения см. в журнале.",
		"Не реализовано",
		"Недопустимый аргумент: {0}",
		"Недопустимый аргумент",
		"Недопустимое состояние: {0}",
		"Недопустимое состояние",
		"Сбой загрузки требуемого файла. Утеряно подключение к Интернету, либо сервер, к которому вы подключены, перешел в автономный режим. Обновите содержимое браузера, чтобы повторить попытку.",
		"Не удалось загрузить требуемый файл. Перезапустите приложение, чтобы повторить попытку. Дополнительные сведения: {0}.",
	],
	"vs/base/common/json": [
		"Недопустимый символ",
		"Недопустимый числовой формат",
		"Требуется имя свойства",
		"Требуется значение",
		"Требуется двоеточие",
		"Требуется запятая",
		"Требуется закрывающая фигурная скобка",
		"Требуется закрывающая квадратная скобка",
		"Ожидается конец файла",
	],
	"vs/base/common/keyCodes": [
		"Windows",
		"Управление",
		"Shift",
		"Alt",
		"COMMAND",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"COMMAND",
		"Windows",
	],
	"vs/base/common/severity": [
		"Ошибка",
		"Предупреждение",
		"Сведения",
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, средство выбора",
		"средство выбора",
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Средство быстрого выбора. Введите, чтобы сузить результаты.",
		"Средство быстрого выбора",
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"Collapse All",
	],
	"vs/editor/browser/standalone/standaloneSchemas": [
		"JSON schema for ASP.NET project.json files",
		"Compilation options that are passed through to Roslyn",
		"The version of the dependency.",
		"The type of the dependency. \'build\' dependencies only exist at build time",
		"The dependencies of the application. Each entry specifes the name and the version of a Nuget package.",
		"A command line script or scripts.\r\rAvailable variables:\r%project:Directory% - The project directory\r%project:Name% - The project name\r%project:Version% - The project version",
		"The author of the application",
		"List of files to exclude from publish output (kpm bundle).",
		"Glob pattern to specify all the code files that needs to be compiled. (data type: string or array with glob pattern(s)). Example: [ \'Folder1\\*.cs\', \'Folder2\\*.cs\' ]",
		"Commands that are available for this application",
		"Configurations are named groups of compilation settings. There are 2 defaults built into the runtime namely \'Debug\' and \'Release\'.",
		"The description of the application",
		"Glob pattern to indicate all the code files to be excluded from compilation. (data type: string or array with glob pattern(s)).",
		"Target frameworks that will be built, and dependencies that are specific to the configuration.",
		"Glob pattern to indicate all the code files to be preprocessed. (data type: string with glob pattern).",
		"Glob pattern to indicate all the files that need to be compiled as resources.",
		"Scripts to execute during the various stages.",
		"Glob pattern to specify the code files to share with dependent projects. Example: [ \'Folder1\\*.cs\', \'Folder2\\*.cs\' ]",
		"The version of the application. Example: 1.2.0.0",
		"Specifying the webroot property in the project.json file specifies the web server root (aka public folder). In visual studio, this folder will be used to root IIS. Static files should be put in here.",
		"JSON schema for Bower configuration files",
		"Any property starting with _ is valid.",
		"The name of your package.",
		"Help users identify and search for your package with a brief description.",
		"A semantic version number.",
		"The primary acting files necessary to use your package.",
		"SPDX license identifier or path/url to a license.",
		"A list of files for Bower to ignore when installing your package.",
		"Used for search by keyword. Helps make your package easier to discover without people needing to know its name.",
		"A list of people that authored the contents of the package.",
		"URL to learn more about the package. Falls back to GitHub project if not specified and it\'s a GitHub endpoint.",
		"The repository in which the source code can be found.",
		"Dependencies are specified with a simple hash of package name to a semver compatible identifier or URL.",
		"Dependencies that are only needed for development of the package, e.g., test framework or building documentation.",
		"Dependency versions to automatically resolve with if conflicts occur between packages.",
		"If you set it to  true  it will refuse to publish it. This is a way to prevent accidental publication of private repositories.",
		"Used by grunt-bower-task to specify custom install locations.",
		"The types of modules this package exposes",
		"NPM configuration for this package.",
		"A person who has been involved in creating or maintaining this package",
		"Dependencies are specified with a simple hash of package name to version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.",
		"Any property starting with _ is valid.",
		"The name of the package.",
		"Version must be parseable by node-semver, which is bundled with npm as a dependency.",
		"This helps people discover your package, as it\'s listed in \'npm search\'.",
		"The relative path to the icon of the package.",
		"This helps people discover your package as it\'s listed in \'npm search\'.",
		"The url to the project homepage.",
		"The url to your project\'s issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.",
		"The url to your project\'s issue tracker.",
		"The email address to which issues should be reported.",
		"You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you\'re placing on it.",
		"You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you\'re placing on it.",
		"A list of people who contributed to this package.",
		"A list of people who maintains this package.",
		"The \'files\' field is an array of files to include in your project. If you name a folder in the array, then it will also include the files inside that folder.",
		"The main field is a module ID that is the primary entry point to your program.",
		"Specify either a single file or an array of filenames to put in place for the man program to find.",
		"If you specify a \'bin\' directory, then all the files in that folder will be used as the \'bin\' hash.",
		"Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.",
		"Put example scripts in here. Someday, it might be exposed in some clever way.",
		"Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it\'s useful meta info.",
		"A folder that is full of man pages. Sugar to generate a \'man\' array by walking the folder.",
		"Specify the place where your code lives. This is helpful for people who want to contribute.",
		"The \'scripts\' member is an object hash of script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.",
		"A \'config\' hash can be used to set configuration parameters used in package scripts that persist across upgrades.",
		"Array of package names that will be bundled when publishing the package.",
		"Array of package names that will be bundled when publishing the package.",
		"If your package is primarily a command-line application that should be installed globally, then set this value to true to provide a warning if it is installed locally.",
		"If set to true, then npm will refuse to publish it.",
		"JSON schema for the ASP.NET global configuration files",
		"A list of project folders relative to this file.",
		"A list of source folders relative to this file.",
		"The runtime to use.",
		"The runtime version to use.",
		"The runtime to use, e.g. coreclr",
		"The runtime architecture to use, e.g. x64.",
		"JSON schema for the TypeScript compiler\'s configuration file",
		"Instructs the TypeScript compiler how to compile .ts files",
		"The character set of the input files",
		"Generates corresponding d.ts files.",
		"Show diagnostic information.",
		"Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.",
		"Emit a single file with source maps instead of having a separate file.",
		"Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.",
		"Print names of files part of the compilation.",
		"The locale to use to show error messages, e.g. en-us.",
		"Specifies the location where debugger should locate map files instead of generated locations",
		"Specify module code generation: \'CommonJS\', \'Amd\', \'System\', or \'UMD\'.",
		"Specifies the end of line sequence to be used when emitting files: \'CRLF\' (dos) or \'LF\' (unix).)",
		"Do not emit output.",
		"Do not emit outputs if any type checking errors were reported.",
		"Do not generate custom helper functions like __extends in compiled output.",
		"Warn on expressions and declarations with an implied \'any\' type.",
		"Do not include the default library file (lib.d.ts).",
		"Do not add triple-slash references or module import targets to the list of compiled files.",
		"Concatenate and emit output to single file.",
		"Redirect output structure to the directory.",
		"Do not erase const enum declarations in generated code.",
		"Do not emit comments to output.",
		"Specifies the root directory of input files. Use to control the output directory structure with --outDir.",
		"Generates corresponding \'.map\' file.",
		"Specifies the location where debugger should locate TypeScript files instead of source locations.",
		"Suppress noImplicitAny errors for indexing objects lacking index signatures.",
		"Specify ECMAScript target version:  \'ES3\' (default), \'ES5\', or \'ES6\' (experimental).",
		"Watch input files.",
		"Enable the JSX option (requires TypeScript 1.6):  \'preserve\', \'react\'.",
		"Emits meta data.for ES7 decorators.",
		"Supports transpiling single TS files into JS files.",
		"Enables experimental support for ES7 decorators.",
		"Enables experimental support for async functions (requires TypeScript 1.6).",
		"If no \'files\' property is present in a tsconfig.json, the compiler defaults to including all files the containing directory and subdirectories. When a \'files\' property is specified, only those files are included.",
		"JSON schema for the JavaScript configuration file",
		"Instructs the JavaScript language service how to validate .js files",
		"The character set of the input files",
		"Show diagnostic information.",
		"The locale to use to show error messages, e.g. en-us.",
		"Specifies the location where debugger should locate map files instead of generated locations",
		"Module code generation to resolve against: \'commonjs\', \'amd\', \'system\', or \'umd\'.",
		"Do not include the default library file (lib.d.ts).",
		"Specify ECMAScript target version:  \'ES3\' (default), \'ES5\', or \'ES6\' (experimental).",
		"Enables experimental support for ES7 decorators.",
		"If no \'files\' property is present in a jsconfig.json, the language service defaults to including all files the containing directory and subdirectories. When a \'files\' property is specified, only those files are included.",
		"List files and folders that should not be included. This property is not honored when the \'files\' property is present.",
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Конфигурация редактора",
		"Определяет семейство шрифтов.",
		"Управляет размером шрифта.",
		"Управляет высотой строк.",
		"Управляет видимостью номеров строк.",
		"Управляет видимостью полей глифа.",
		"Столбцы, в которых должны отображаться вертикальные линейки",
		"Символы, которые будут использоваться как разделители слов при выполнении навигации или других операций, связанных со словами.",
		"Число пробелов в табуляции.",
		"Ожидается число. Обратите внимание, что значение auto заменено параметром editor.detectIndentation.",
		"Вставлять пробелы при нажатии клавиши TAB.",
		"Ожидается логическое значение. Обратите внимание, что значение auto заменено параметром editor.detectIndentation.",
		"При открытии файла editor.tabSize и editor.insertSpaces будут определяться на основе содержимого файла.",
		"Определяет, будут ли выделения иметь скругленные углы.",
		"Определяет, будет ли содержимое редактора прокручиваться за последнюю строку.",
		"Определяет число символов, после которых текст будет перенесен на следующую строку. Если этот параметр имеет значение 0, используется перенос по ширине окна просмотра (перенос по словам). Если задать значение –1, то в редакторе не будет выполняться перенос по словам.",
		"Управляет отступом строк с переносом по словам. Допустимые значения: \"none\", \"same\" или \"indent\".",
		"Множитель, используемый для параметров deltaX и deltaY событий прокрутки колесика мыши.",
		"Определяет, должны ли при вводе текста отображаться краткие предложения.",
		"Управляет длительностью задержки (в мс), перед отображением кратких предложений.",
		"Enables parameter hints",
		"Определяет, должен ли редактор автоматически закрывать скобки после открытия.",
		"Управляет параметром, определяющим, должен ли редактор автоматически форматировать строку после ввода.",
		"Определяет, должны ли при вводе триггерных символов автоматически отображаться предложения.",
		"Определяет, можно ли принимать предложения клавишей ВВОД в дополнение к клавише TAB. Это помогает избежать неоднозначности между вставкой новых строк или принятием предложений.",
		"Определяет, будет ли редактор выделять фрагменты, совпадающие с выделенным текстом.",
		"Определяет, сколько украшений могут отображаться на одном месте в обзорной линейке.",
		"Управляет анимацией мигания курсора. Допустимые значения: \"blink\", \"visible\" и \"hidden\".",
		"Определяет стиль курсора. Допустимые значения: \"block\" и \"line\".",
		"Включает лигатуры шрифта.",
		"Управляет скрытием курсора в обзорной линейке.",
		"Определяет, должны ли в редакторе отображаться символы-разделители.",
		"Определяет, отображает ли редактор справочные сведения для поддерживаемых режимов.",
		"Определяет, включено ли сворачивание кода в редакторе.",
		"Вставка и удаление пробелов после позиции табуляции",
		"Удалить автоматически вставляемый конечный пробел",
		"Keep peek editors open even when double clicking their content or when hitting Escape.",
		"Определяет, как редактор несовпадений отображает отличия: рядом или в тексте.",
		"Определяет, должен ли редактор несовпадений трактовать несовпадения символов-разделителей как различия.",
		"Контролирует, следует ли поддерживать первичный буфер обмена Linux.",
	],
	"vs/editor/common/config/defaultConfig": [
		"Содержимое редактора",
	],
	"vs/editor/common/controller/cursor": [
		"Неожиданное исключение при выполнении команды.",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"Не удалось разметить входные данные.",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Обычный текст",
	],
	"vs/editor/common/modes/supports/suggestSupport": [
		"Включите предложения на основе слов.",
	],
	"vs/editor/common/services/bulkEdit": [
		"Следующие файлы были изменены: {0}",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Добавляет объявления языка.",
		"Идентификатор языка.",
		"Псевдонимы имен для языка.",
		"Расширения имен файлов, связанные с языком.",
		"Имена файлов, связанные с языком.",
		"Стандартные маски имен файлов, связанные с языком.",
		"Типы MIME, связанные с языком.",
		"Регулярное выражение, соответствующее первой строке файла языка.",
		"Относительный путь к файлу, содержащему параметры конфигурации для языка.",
		"Пустое значение \"contributes.{0}\"",
		"свойство \"{0}\" является обязательным и должно иметь тип string",
		"свойство \"{0}\" может быть опущено и должно иметь тип string[]",
		"свойство \"{0}\" может быть опущено и должно иметь тип string[]",
		"свойство \"{0}\" может быть опущено и должно иметь тип string",
		"свойство \"{0}\" может быть опущено и должно иметь тип string",
		"свойство \"{0}\" может быть опущено и должно иметь тип string[]",
		"свойство \"{0}\" может быть опущено и должно иметь тип string[]",
		"Недопустимое значение \"contributes.{0}\". Требуется массив.",
	],
	"vs/editor/common/services/modelServiceImpl": [
		"Измените параметры: editor.detectIndentation заменяет editor.tabSize: auto или editor.insertSpaces: auto",
	],
	"vs/editor/contrib/accessibility/browser/accessibility": [
		"Показать справку по специальным возможностям",
		"Благодарим за ознакомление с экспериментальными специальными возможностями VS Code.",
		"Состояние:",
		"При нажатии клавиши TAB в этом редакторе фокус ввода переместится на следующий элемент, допускающий получение фокуса ввода. Чтобы изменить это поведение, нажмите клавишу {0}.",
		"При нажатии клавиши TAB в этом редакторе фокус ввода переместится на следующий элемент, допускающий получение фокуса ввода. Команду {0} в настоящее время нельзя выполнить с помощью настраиваемого сочетания клавиш.",
		"При нажатии клавиши TAB в этом редакторе будет вставлен символ табуляции. Чтобы изменить это поведение, нажмите клавишу {0}.",
		"При нажатии клавиши TAB в этом редакторе фокус ввода переместится на следующий элемент, допускающий получение фокуса ввода. Команду {0} в настоящее время нельзя выполнить с помощью настраиваемого сочетания клавиш.",
		"Вы можете закрыть эту подсказку и вернуться в редактор, нажав клавишу ESCAPE.",
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Вырезать",
		"Копировать",
		"Вставить",
	],
	"vs/editor/contrib/comment/common/comment": [
		"Закомментировать или раскомментировать строку",
		"Закомментировать строку",
		"Раскомментировать строку",
		"Закомментировать или раскомментировать блок",
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Показать контекстное меню редактора",
	],
	"vs/editor/contrib/defineKeybinding/browser/defineKeybinding": [
		"Определить назначение клавиш",
		"Нажмите нужное сочетание клавиш, а затем клавишу ВВОД",
		"Определить назначение клавиш",
		"Для текущей раскладки клавиатуры нажмите ",
		"Вы не сможете нажать это сочетание клавиш в текущей раскладке клавиатуры.",
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Найти",
		"Найти",
		"Предыдущее соответствие",
		"Следующее соответствие",
		"Найти в выделении",
		"Закрыть",
		"Заменить",
		"Заменить",
		"Заменить",
		"Заменить все",
		"Режим \"Переключение замены\"",
		"Отображаются только первые 999 результатов, но все операции поиска выполняются со всем текстом.",
		"{0} из {1}",
		"Результаты отсутствуют",
	],
	"vs/editor/contrib/find/common/findController": [
		"Выбрать все вхождения найденных совпадений",
		"Изменить все вхождения",
		"Найти",
		"Найти далее",
		"Найти ранее",
		"Найти следующее выделение",
		"Найти предыдущее выделение",
		"Заменить",
		"Переместить последнее выделение в следующее найденное совпадение",
		"Добавить выделение в следующее найденное совпадение",
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Развернуть",
		"Unfold Recursively",
		"Свернуть",
		"Fold Recursively",
		"Свернуть все",
		"Развернуть все",
		"Уровень сгиба 1",
		"Уровень сгиба 2",
		"Уровень сгиба 3",
		"Уровень сгиба 4",
		"Уровень сгиба 5",
	],
	"vs/editor/contrib/format/common/formatActions": [
		"Код формата",
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" — определения {0}",
		"Щелкните, чтобы отобразить найденные определения ({0}).",
		"Показать определение",
		"Перейти к определению",
		"Открыть определение сбоку",
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"Предложенные исправления: ",
		"Предложенное исправление: ",
		"({0}/{1}) [{2}]",
		"({0}/{1})",
		"Перейти к следующей ошибке или предупреждению",
		"Перейти к предыдущей ошибке или предупреждению",
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Показать при наведении",
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Идет загрузка...",
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Заменить предыдущим значением",
		"Заменить следующим значением",
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"Настроенный размер шага табуляции",
		"Выбрать размер шага табуляции для текущего файла",
		"Преобразовать отступ в пробелы",
		"Преобразовать отступ в шаги табуляции",
		"Отступ с использованием пробелов",
		"Отступ с использованием табуляции",
		"Определение отступа от содержимого",
		"Переключение отображения пробелов",
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Удалить строку",
		"Сортировка строк по возрастанию",
		"Сортировка строк по убыванию",
		"Удалить конечные символы-разделители",
		"Переместить строку вниз",
		"Переместить строку вверх",
		"Копировать строку снизу",
		"Копировать строку сверху",
		"Увеличить отступ",
		"Уменьшить отступ",
		"Вставить строку выше",
		"Вставить строку ниже",
	],
	"vs/editor/contrib/links/browser/links": [
		"Щелкните с нажатой клавишей Cmd, чтобы перейти по ссылке",
		"Щелкните с нажатой клавишей Ctrl, чтобы перейти по ссылке",
		"Недопустимый код URI: невозможно открыть {0}",
		"Открыть ссылку",
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Добавить курсор выше",
		"Добавить курсор ниже",
		"Создать несколько курсоров на основе выбранных линий",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Переключить подсказки к параметрам",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, подсказка",
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"Быстрое исправление",
	],
	"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget": [
		"{0}, предложенное быстрое исправление",
		"Загрузка...",
		"Предложения по исправлениям отсутствуют.",
		"Быстрое исправление",
		"{0}, принято",
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine": [
		"Перейти к строке {0} и столбцу {1}",
		"Перейти к строке {0}",
		"Введите номер строки от 1 до {0} для перехода",
		"Введите столбец между 1 и {0} для перехода",
		"Go to line {0}",
		"Перейти к строке...",
		"Введите номер строки, затем двоеточие (необязательно) и номер столбца, для перехода",
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine.contribution": [
		"Перейти к строке...",
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand": [
		"{0}, commands",
		"Палитра команд",
		"Введите имя действия, которое нужно выполнить",
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand.contribution": [
		"Палитра команд",
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline": [
		"{0}, symbols",
		"Перейти к символу...",
		"Введите имя идентификатора, к которому нужно перейти",
		"символы ({0})",
		"модули ({0})",
		"классы ({0})",
		"интерфейсы ({0})",
		"методы ({0})",
		"функции ({0})",
		"свойства ({0})",
		"переменные ({0})",
		"переменные ({0})",
		"конструкторы ({0})",
		"вызовы ({0})",
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline.contribution": [
		"Перейти к символу...",
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" — ссылки {0}",
		"Найти все ссылки",
		"Показать ссылки",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"Загрузка...",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"Failed to resolve file.",
		"Ссылок: {0}",
		"{0} ссылка",
		"предварительный просмотр недоступен",
		"Ссылки",
		"Результаты отсутствуют",
		"Ссылки",
	],
	"vs/editor/contrib/rename/browser/rename": [
		"Переименовать символ",
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Введите новое имя для входных данных и нажмите клавишу ВВОД для подтверждения.",
	],
	"vs/editor/contrib/rename/common/rename": [
		"Результаты отсутствуют.",
	],
	"vs/editor/contrib/smartSelect/common/jumpToBracket": [
		"Перейти к скобке",
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Развернуть выделение",
		"Сжать выделение",
	],
	"vs/editor/contrib/suggest/browser/suggest": [
		"Переключить предложение",
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"Подробнее...{0}",
		"{0}, предложение, содержит данные",
		"{0}, предложение",
		"Вернуться",
		"Загрузка...",
		"Предложения отсутствуют.",
		"{0}, принято",
		"{0}, предложение, содержит данные",
		"{0}, предложение",
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Переключение фокуса ввода с помощью клавиши TAB",
	],
	"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap": [
		"Вид: переключение режима переноса по словам",
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"Закрыть",
	],
	"vs/languages/css/common/css.contribution": [
		"Конфигурация CSS",
		"Управляет проверкой CSS и серьезностью проблем.",
	],
	"vs/languages/css/common/services/lintRules": [
		"При использовании зависящего от поставщика префикса также указывайте все остальные свойства поставщика",
		"При использовании зависящего от поставщика префикса также указывайте стандартное свойство",
		"Не использовать дублирующиеся определения стилей",
		"Не использовать пустые наборы правил",
		"Операторы импорта не загружаются параллельно",
		"Не использовать ширину или высоту при использовании поля или границы",
		"Универсальный селектор (*), как известно, функционирует медленно",
		"Для нуля не требуется никакой единицы",
		"Правило @font-face должно определять свойства \"src\" и \"font-family\"",
		"Цвета в шестнадцатеричном формате должны содержать три или шесть шестнадцатеричных чисел",
		"Недопустимое число параметров",
		"Неизвестное свойство.",
		"Полезные советы для Internet Explorer требуются только при поддержке Internet Explorer 7 и более ранних версий",
		"Неизвестное свойство поставщика.",
		"Свойство проигнорировано из-за значения свойства display. Например, при \"display: inline\" свойства width, height, margin-top, margin-bottom и float не работают",
		"Старайтесь не использовать !important, так как это признак того, что весь код CSS стал неуправляемым и его надо переработать.",
		"Старайтесь не использовать \"float\". Из-за элементов \"float\" работа кода CSS может легко нарушиться, если изменить один из аспектов разметки.",
		"Селекторы не должны содержать идентификаторов, потому что эти правила слишком тесно связаны с HTML.",
		"Включает или отключает все проверки",
	],
	"vs/languages/html/common/html.contribution": [
		"Конфигурация HTML",
		"Максимальное число символов на строку (0 = disable).",
		"Список тегов с разделителями-запятыми, который не следует повторно форматировать. Значение \"null\" по умолчанию ставится для всех внутренних тегов.",
		"Отступ <head> и разделы <body>.",
		"Следует ли сохранять разрывы строк перед элементами. Работает только перед элементами, а не внутри тегов или для текста.",
		"Максимальное число разрывов строк для сохранения в блоке. Чтобы указать неограниченное число строк, используйте \"null\".",
		"Формат и отступ {{#foo}} и {{/foo}}.",
		"Завершение с помощью новой строки.",
		"Список тегов с разделителями-запятыми и дополнительными новыми строками между ними. Значение \"null\" по умолчанию ставится для \"head, body, /html\".",
	],
	"vs/languages/json/common/json.contribution": [
		"Конфигурация JSON",
		"Сопоставить схемы с JSON-файлами в текущем проекте",
		"URL-адрес схемы или относительный путь к схеме в текущем каталоге",
		"Шаблон файла, который может содержать \"*\", для сопоставления при преобразовании JSON-файлов в схемы.",
		"Массив шаблонов файлов для сопоставления при преобразовании JSON-файлов в схемы.",
		"Определение схемы для заданного URL-адреса. Необходимо предоставить схему, чтобы исключить возможность получения доступа к URL-адресу схемы.",
	],
	"vs/languages/less/common/less.contribution": [
		"Конфигурация LESS",
		"Управляет проверкой LESS и серьезностью проблем.",
	],
	"vs/languages/markdown/common/markdown.contribution": [
		"Конфигурация предварительного просмотра markdown",
		"Список URL-адресов или локальных путей к стилям CSS для использования в предварительном просмотре markdown.",
	],
	"vs/languages/sass/common/sass.contribution": [
		"Конфигурация SASS",
		"Управляет проверкой SASS и серьезностью проблем.",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Добавляет параметры конфигурации.",
		"Краткая сводка параметров. Эта метка будет использоваться в файле параметров в качестве разделяющего комментария.",
		"Описание свойств конфигурации.",
		"Если тип configuration.type задан, то он должен иметь значение object",
		"configuration.title должно быть строкой",
		"configuration.properties должно быть объектом",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Не удалось активировать расширение \"{1}\". Причина: неизвестный зависимый компонент \"{0}\".",
		"Не удалось активировать расширение \"{1}\". Причина: ошибка активации зависимого компонента \"{0}\".",
		"Не удалось активировать расширение \"{0}\". Причина: более 10 уровней зависимостей (скорее всего, цикл зависимостей).",
		"Ошибка активации расширения \"{0}\": {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Пустое описание расширения",
		"свойство \"{0}\" является обязательным и должно иметь тип string",
		"свойство \"{0}\" является обязательным и должно иметь тип string",
		"свойство \"{0}\" является обязательным и должно иметь тип string",
		"свойство \"{0}\" является обязательным и должно быть типа object",
		"свойство \"{0}\" является обязательным и должно иметь тип string",
		"свойство \"{0}\" может быть опущено или должно быть типа \"string []\"",
		"свойство \"{0}\" может быть опущено или должно быть типа \"string []\"",
		"оба свойства, \"{0}\" и \"{1}\", должны быть либо указаны, либо опущены",
		"свойство \"{0}\" может быть опущено или должно иметь тип string",
		"Ожидается, что функция main ({0}) будет включена в папку расширения ({1}). Из-за этого расширение может стать непереносимым.",
		"оба свойства, \"{0}\" и \"{1}\", должны быть либо указаны, либо опущены",
		"Отображаемое имя расширения, используемого в коллекции VS Code.",
		"Категории, используемые коллекцией VS Code для классификации расширения.",
		"Баннер, используемый в магазине VS Code.",
		"Цвет баннера в заголовке страницы магазина VS Code.",
		"Цветовая тема для шрифта, используемого в баннере.",
		"Издатель расширения VS Code.",
		"События активации для расширения кода VS Code.",
		"Зависимости от других расширений. Идентификатор расширения — всегда ${publisher}.${name}. Например: vscode.csharp.",
		"Скрипт, выполняемый перед публикацией пакета в качестве расширения VS Code.",
		"Все публикации расширения VS Code, представленные этим пакетом.",
	],
	"vs/platform/jsonschemas/common/jsonContributionRegistry": [
		"Описывает JSON-файл с использованием схемы. Дополнительные сведения см. на веб-сайте json-schema.org.",
		"Уникальный идентификатор схемы.",
		"Схема, с использованием которой будет проверяться этот документ ",
		"Описательное название элемента.",
		"Длинное описание элемента. Используется в меню наведения и предложениях.",
		"Значение по умолчанию. Используется предложениями.",
		"Число, на которое должно делиться текущее значение без остатка.",
		"Максимальное числовое значение, включенное по умолчанию.",
		"Делает максимальное свойство эксклюзивным.",
		"Минимальное числовое значение, по умолчанию — включительно.",
		"Делает минимальное свойство эксклюзивным.",
		"Максимальная длина строки.",
		"Минимальная длина строки.",
		"Регулярное выражение, с которым сопоставляется строка. Оно не является неявно прикрепленным.",
		"Для массивов, только когда элементы заданы в виде массива. Если это схема, она проверяет элементы после тех, которые заданы массивом элементов. Если значение false, наличие дополнительных элементов вызывает сбой проверки.",
		"Для массивов. Может являться схемой, относительно которой проверяется каждый элемент, или массивом схем, относительно которого проверяется каждый элемент по порядку (первая схема проверяет первый элемент, вторая схема проверяет второй элемент и так далее).",
		"Максимальное число элементов, которые могут находиться внутри массива. Включительно.",
		"Минимальное число элементов, которые могут находиться внутри массива. Включительно.",
		"Если все элементы массива должны быть уникальными. По умолчанию имеет значение false.",
		"Максимальное число свойств, которыми может обладать объект. Включительно.",
		"Минимальное число свойств, которыми может обладать объект. Включительно.",
		"Массив строк, содержащий имена всех свойств, необходимых в этом объекте.",
		"Схема или логическое значение. Если это схема, она используется для проверки всех свойств, не совпадающих с параметром properties или patternProperties. Если значение false, любые свойства, не совпадающие ни с одним из этих параметров, вызывают сбой схемы.",
		"Не используется для проверки. Поместите сюда вложенные схемы, на которые требуется создавать встроенные ссылки с помощью $ref.",
		"Сопоставление имен свойств схемам для каждого свойства.",
		"Сопоставление регулярных выражений в именах свойств схемам для соответствующих свойств.",
		"Сопоставление имен свойств массиву имен свойств или схеме. Массив имен свойств в объекте используется для проверки допустимости свойства, именованного в ключе. Если значение — схема, эта схема применима к объекту только в том случае, если свойство, указанное в ключе, существует в объекте.",
		"Набор допустимых значений литерала.",
		"Строка одного из базовых типов схем (число, целое число, значение null, массив, объект, логическое значение, строка) или массив строк, задающий подмножество этих типов.",
		"Описывает формат, требуемый для значения.",
		"Массив схем, все из которых должны соответствовать.",
		"Массив схем, хотя бы одна из которых должна соответствовать.",
		"Массив схем, из которых должна соответствовать только одна.",
		"Схема, которая не должна соответствовать.",
	],
	"vs/platform/keybinding/browser/keybindingServiceImpl": [
		"Доступные команды: ",
		"Была нажата клавиша ({0}). Ожидание нажатия второй клавиши сочетания...",
		"Сочетание клавиш ({0} и {1}) не является командой.",
	],
	"vs/platform/message/common/message": [
		"Закрыть",
		"Отмена",
	]
});