/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.3.1(undefined)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

(function() {
var __m = ["vs/editor/standalone-languages/objective-c","require","exports"];
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
            blockComment: ['/*', '*/'],
        },
        brackets: [['{', '}'], ['[', ']'], ['(', ')'], ['<', '>']],
        autoClosingPairs: [
            { open: '"', close: '"', notIn: ['string', 'comment'] },
            { open: '\'', close: '\'', notIn: ['string', 'comment'] },
            { open: '{', close: '}', notIn: ['string', 'comment'] },
            { open: '[', close: ']', notIn: ['string', 'comment'] },
            { open: '(', close: ')', notIn: ['string', 'comment'] },
            { open: '<', close: '>', notIn: ['string', 'comment'] },
        ]
    };
    exports.language = {
        defaultToken: '',
        tokenPostfix: '.objective-c',
        keywords: [
            '#import',
            '#include',
            '#define',
            '#else',
            '#endif',
            '#if',
            '#ifdef',
            '#ifndef',
            '#ident',
            '#undef',
            '@class',
            '@defs',
            '@dynamic',
            '@encode',
            '@end',
            '@implementation',
            '@interface',
            '@package',
            '@private',
            '@protected',
            '@property',
            '@protocol',
            '@public',
            '@selector',
            '@synthesize',
            '__declspec',
            'assign',
            'auto',
            'BOOL',
            'break',
            'bycopy',
            'byref',
            'case',
            'char',
            'Class',
            'const',
            'copy',
            'continue',
            'default',
            'do',
            'double',
            'else',
            'enum',
            'extern',
            'FALSE',
            'false',
            'float',
            'for',
            'goto',
            'if',
            'in',
            'int',
            'id',
            'inout',
            'IMP',
            'long',
            'nil',
            'nonatomic',
            'NULL',
            'oneway',
            'out',
            'private',
            'public',
            'protected',
            'readwrite',
            'readonly',
            'register',
            'return',
            'SEL',
            'self',
            'short',
            'signed',
            'sizeof',
            'static',
            'struct',
            'super',
            'switch',
            'typedef',
            'TRUE',
            'true',
            'union',
            'unsigned',
            'volatile',
            'void',
            'while',
        ],
        decpart: /\d(_?\d)*/,
        decimal: /0|@decpart/,
        tokenizer: {
            root: [
                { include: '@comments' },
                { include: '@whitespace' },
                { include: '@numbers' },
                { include: '@strings' },
                [/[,:;]/, 'delimiter'],
                [/[{}\[\]()<>]/, '@brackets'],
                [/[a-zA-Z@#]\w*/, { cases: { '@keywords': 'keyword',
                            '@default': 'identifier' } }],
                [/[<>=\\+\\-\\*\\/\\^\\|\\~,]|and\\b|or\\b|not\\b]/, 'operator'],
            ],
            whitespace: [
                [/\s+/, 'white'],
            ],
            comments: [
                ['\\/\\*', 'comment', '@comment'],
                ['\\/\\/+.*', 'comment'],
            ],
            comment: [
                ['\\*\\/', 'comment', '@pop'],
                ['.', 'comment',],
            ],
            numbers: [
                [/0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/, 'number.hex'],
                [/@decimal((\.@decpart)?([eE][\-+]?@decpart)?)[fF]*/, {
                        cases: { '(\\d)*': 'number',
                            '$0': 'number.float' } }]
            ],
            // Recognize strings, including those broken across lines with \ (but not without)
            strings: [
                [/'$/, 'string.escape', '@popall'],
                [/'/, 'string.escape', '@stringBody'],
                [/"$/, 'string.escape', '@popall'],
                [/"/, 'string.escape', '@dblStringBody']
            ],
            stringBody: [
                [/\\./, 'string'],
                [/'/, 'string.escape', '@popall'],
                [/.(?=.*')/, 'string'],
                [/.*\\$/, 'string'],
                [/.*$/, 'string', '@popall']
            ],
            dblStringBody: [
                [/\\./, 'string'],
                [/"/, 'string.escape', '@popall'],
                [/.(?=.*")/, 'string'],
                [/.*\\$/, 'string'],
                [/.*$/, 'string', '@popall']
            ]
        }
    };
});

}).call(this);
//# sourceMappingURL=objective-c.js.map
