/**
 * @flow
 * @relayHash a9f7b403814b3583dae7a22486a998b6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChangeTodoDoneStatusInput = {|
  id: string,
  done: boolean,
  clientMutationId?: ?string,
|};
export type ChangeTodoDoneStatusMutationVariables = {|
  input: ChangeTodoDoneStatusInput
|};
export type ChangeTodoDoneStatusMutationResponse = {|
  +changeTodoDoneStatus: ?{|
    +todo: ?{|
      +id: string,
      +done: ?boolean,
    |}
  |}
|};
export type ChangeTodoDoneStatusMutation = {|
  variables: ChangeTodoDoneStatusMutationVariables,
  response: ChangeTodoDoneStatusMutationResponse,
|};
*/


/*
mutation ChangeTodoDoneStatusMutation(
  $input: ChangeTodoDoneStatusInput!
) {
  changeTodoDoneStatus(input: $input) {
    todo {
      id
      done
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ChangeTodoDoneStatusInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "changeTodoDoneStatus",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ChangeTodoDoneStatusPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todo",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ChangeTodoDoneStatusMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ChangeTodoDoneStatusMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ChangeTodoDoneStatusMutation",
    "id": null,
    "text": "mutation ChangeTodoDoneStatusMutation(\n  $input: ChangeTodoDoneStatusInput!\n) {\n  changeTodoDoneStatus(input: $input) {\n    todo {\n      id\n      done\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7aca1fbb3270ef990949a07027c7f678';

module.exports = node;
