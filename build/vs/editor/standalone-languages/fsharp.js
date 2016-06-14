/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.3.1(undefined)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

(function() {
var __m = ["vs/editor/standalone-languages/fsharp","require","exports"];
var __M = function(deps) {
  var result = [];
  for (var i = 0, len = deps.length; i < len; i++) {
    result[i] = __m[deps[i]];
  }
  return result;
};
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[0], __M([1,2]), function (require, exports) {
    'use strict';
    exports.conf = {
        comments: {
            lineComment: '//',
            blockComment: ['(*', '*)'],
        },
        brackets: [['{', '}'], ['[', ']'], ['(', ')'], ['<', '>']],
        autoClosingPairs: [
            { open: '{', close: '}', notIn: ['string', 'comment'] },
            { open: '[', close: ']', notIn: ['string', 'comment'] },
            { open: '(', close: ')', notIn: ['string', 'comment'] },
            { open: '"', close: '"', notIn: ['string', 'comment'] }
        ]
    };
    exports.language = {
        defaultToken: '',
        tokenPostfix: '.fs',
        keywords: [
            'abstract', 'and', 'atomic', 'as',
            'assert', 'asr', 'base', 'begin',
            'break', 'checked', 'component',
            'const', 'constraint', 'constructor',
            'continue', 'class', 'default',
            'delegate', 'do', 'done', 'downcast',
            'downto', 'elif', 'else', 'end',
            'exception', 'eager', 'event', 'external',
            'extern', 'false', 'finally', 'for',
            'fun', 'function', 'fixed', 'functor',
            'global', 'if', 'in', 'include', 'inherit',
            'inline', 'interface', 'internal', 'land',
            'lor', 'lsl', 'lsr', 'lxor', 'lazy', 'let',
            'match', 'member', 'mod', 'module', 'mutable',
            'namespace', 'method', 'mixin', 'new', 'not',
            'null', 'of', 'open', 'or', 'object',
            'override', 'private', 'parallel', 'process',
            'protected', 'pure', 'public', 'rec', 'return',
            'static', 'sealed', 'struct', 'sig', 'then',
            'to', 'true', 'tailcall', 'trait',
            'try', 'type', 'upcast', 'use',
            'val', 'void', 'virtual', 'volatile',
            'when', 'while', 'with', 'yield'
        ],
        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*\^%;\.,\/]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        integersuffix: /[uU]?[yslnLI]?/,
        floatsuffix: /[fFmM]?/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-zA-Z_]\w*/, { cases: { '@keywords': { token: 'keyword.$0' },
                            '@default': 'identifier' } }],
                // whitespace
                { include: '@whitespace' },
                // [< attributes >].
                [/\[<.*>\]/, 'annotation'],
                // Preprocessor directive
                [/^#(if|else|endif)/, 'keyword'],
                // delimiters and operators
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, 'delimiter'],
                // numbers
                [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/0x[0-9a-fA-F]+LF/, 'number.float'],
                [/0x[0-9a-fA-F]+(@integersuffix)/, 'number.hex'],
                [/0b[0-1]+(@integersuffix)/, 'number.bin'],
                [/\d+(@integersuffix)/, 'number'],
                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],
                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"""/, 'string', '@string."""'],
                [/"/, 'string', '@string."'],
                // literal string
                [/\@"/, { token: 'string.quote', bracket: '@open', next: '@litstring' }],
                // characters
                [/'[^\\']'B?/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid']
            ],
            whitespace: [
                [/[ \t\r\n]+/, ''],
                [/\(\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],
            comment: [
                [/[^\*]+/, 'comment'],
                [/\*\)/, 'comment', '@pop'],
                [/\*/, 'comment']
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/("""|"B?)/, { cases: { '$#==$S2': { token: 'string', next: '@pop' },
                            '@default': 'string' } }]
            ],
            litstring: [
                [/[^"]+/, 'string'],
                [/""/, 'string.escape'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
        },
    };
});

}).call(this);
//# sourceMappingURL=fsharp.js.map