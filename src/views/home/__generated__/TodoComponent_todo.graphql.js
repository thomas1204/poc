/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoComponent_todo$ref: FragmentReference;
declare export opaque type TodoComponent_todo$fragmentType: TodoComponent_todo$ref;
export type TodoComponent_todo = {|
  +id: string,
  +title: ?string,
  +done: ?boolean,
  +$refType: TodoComponent_todo$ref,
|};
export type TodoComponent_todo$data = TodoComponent_todo;
export type TodoComponent_todo$key = {
  +$data?: TodoComponent_todo$data,
  +$fragmentRefs: TodoComponent_todo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TodoComponent_todo",
  "type": "Todo",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '9f457d5e39a92b96ac633c731c78b0cf';

module.exports = node;
