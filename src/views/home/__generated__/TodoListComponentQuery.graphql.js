/**
 * @flow
 * @relayHash 69d012dcb315264057f51eb67ae0b9be
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoComponent_todo$ref = any;
export type TodoListComponentQueryVariables = {||};
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
query TodoListComponentQuery {
  todos {
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
var v0 = {
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
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todos",
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
                  (v0/*: any*/),
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
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todos",
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
                  (v0/*: any*/),
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
    "text": "query TodoListComponentQuery {\n  todos {\n    edges {\n      node {\n        id\n        ...TodoComponent_todo\n      }\n    }\n  }\n}\n\nfragment TodoComponent_todo on Todo {\n  id\n  title\n  done\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1e3af24cbdc015184f9afd9a5c9f9e87';

module.exports = node;
