const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { default: generate } = require('@babel/generator');

const code = 'const n = 1';

// парсим код в ast
const ast = {
  "type": "File",
  "start": 0,
  "end": 10,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 10
    }
  },
  "program": {
    "type": "Program",
    "start": 0,
    "end": 10,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 1,
        "column": 10
      }
    },
    "sourceType": "module",
    "body": [
      {
        "type": "ExpressionStatement",
        "start": 0,
        "end": 10,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "expression": {
          "type": "ArrowFunctionExpression",
          "start": 0,
          "end": 10,
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 10
            }
          },
          "id": null,
          "generator": false,
          "expression": true,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 0,
              "end": 1,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 1
                },
                "identifierName": "x"
              },
              "name": "x"
            }
          ],
          "body": {
            "type": "BinaryExpression",
            "start": 5,
            "end": 10,
            "loc": {
              "start": {
                "line": 1,
                "column": 5
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "left": {
              "type": "Identifier",
              "start": 5,
              "end": 6,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 5
                },
                "end": {
                  "line": 1,
                  "column": 6
                },
                "identifierName": "x"
              },
              "name": "x"
            },
            "operator": "*",
            "right": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                },
                "identifierName": "x"
              },
              "name": "x"
            }
          }
        }
      }
    ],
    "directives": []
  },
  "comments": [],
  "tokens": [
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "value": "x",
      "start": 0,
      "end": 1,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 1
        }
      }
    },
    {
      "type": {
        "label": "=>",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 2,
      "end": 4,
      "loc": {
        "start": {
          "line": 1,
          "column": 2
        },
        "end": {
          "line": 1,
          "column": 4
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "value": "x",
      "start": 5,
      "end": 6,
      "loc": {
        "start": {
          "line": 1,
          "column": 5
        },
        "end": {
          "line": 1,
          "column": 6
        }
      }
    },
    {
      "type": {
        "label": "*",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": 10,
        "updateContext": null
      },
      "value": "*",
      "start": 7,
      "end": 8,
      "loc": {
        "start": {
          "line": 1,
          "column": 7
        },
        "end": {
          "line": 1,
          "column": 8
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "value": "x",
      "start": 9,
      "end": 10,
      "loc": {
        "start": {
          "line": 1,
          "column": 9
        },
        "end": {
          "line": 1,
          "column": 10
        }
      }
    },
    {
      "type": {
        "label": "eof",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 10,
      "end": 10,
      "loc": {
        "start": {
          "line": 1,
          "column": 10
        },
        "end": {
          "line": 1,
          "column": 10
        }
      }
    }
  ]
};

// изменяем ast
traverse(ast, {
  enter(path) {
    // в этом примере мы меняем все переменные `n` на `x`
    if (path.isIdentifier({ name: 'n' })) {
      path.node.name = 'x';
    }
  },
});

// генерируем код обратно из ast
const output = generate(ast, code);
console.log(output.code); // 'const x = 1;' 
