/**
 * @flow
 * @relayHash 041dca0e932cdb3eda201300f01dc8ac
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoComponent_todo$ref = any;
export type TodoListComponentQueryVariables = {|
  searchText?: ?string
|};
export type TodoListComponentQueryResponse = {|
  +todos: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: TodoComponent_todo$ref,
      |}
    |}>
  |}
|};
export type TodoListComponentQuery = {|
  variables: TodoListComponentQueryVariables,
  response: TodoListComponentQueryResponse,
|};
*/


/*
query TodoListComponentQuery(
  $searchText: String
) {
  todos(first: 100, searchByTitle: $searchText) {
    edges {
      node {
        id
        ...TodoComponent_todo
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment TodoComponent_todo on Todo {
  id
  title
  done
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "searchText",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
  {
    "kind": "Variable",
    "name": "searchByTitle",
    "variableName": "searchText"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListComponentQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "todos",
        "name": "__Todo_todos_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "todosConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "todosEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Todo",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "TodoComponent_todo",
                    "args": null
                  }
                ]
              },
              (v3/*: any*/)
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoListComponentQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todos",
        "storageKey": null,
        "args": (v5/*: any*/),
        "concreteType": "todosConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "todosEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Todo",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "done",
                    "args": null,
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ]
              },
              (v3/*: any*/)
            ]
          },
          (v4/*: any*/)
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "todos",
        "args": (v5/*: any*/),
        "handle": "connection",
        "key": "Todo_todos",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TodoListComponentQuery",
    "id": null,
    "text": "query TodoListComponentQuery(\n  $searchText: String\n) {\n  todos(first: 100, searchByTitle: $searchText) {\n    edges {\n      node {\n        id\n        ...TodoComponent_todo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment TodoComponent_todo on Todo {\n  id\n  title\n  done\n}\n",
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "todos"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b4a6080ee90754d5fce06441d3158a2';

module.exports = node;
