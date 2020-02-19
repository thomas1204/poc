/**
 * @flow
 * @relayHash 504d1c260a8fef49cf9ccaa5479cf06f
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
  todos(searchByTitle: $searchText) {
    edges {
      node {
        id
        ...TodoComponent_todo
      }
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
v1 = [
  {
    "kind": "Variable",
    "name": "searchByTitle",
    "variableName": "searchText"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
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
        "alias": null,
        "name": "todos",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "TodoComponent_todo",
                    "args": null
                  }
                ]
              }
            ]
          }
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
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
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
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TodoListComponentQuery",
    "id": null,
    "text": "query TodoListComponentQuery(\n  $searchText: String\n) {\n  todos(searchByTitle: $searchText) {\n    edges {\n      node {\n        id\n        ...TodoComponent_todo\n      }\n    }\n  }\n}\n\nfragment TodoComponent_todo on Todo {\n  id\n  title\n  done\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1a357e583f68ef9ab952c4244422254c';

module.exports = node;
