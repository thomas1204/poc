import {graphql, commitMutation} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';
import RelayEnvironment from "../../relay.environment";


// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation AddTodoMutation($input: AddTodoInput!) {
    addTodo(input: $input) {
      todo {
        node{
	        id
	        title
	        done
	      }
	      cursor
      }
    }
  }
`;



const SharedUpdater = (proxyStore, NEW_NODE) => {
	const STORE_ROOT = proxyStore.getRoot();
	const CONNECTION = ConnectionHandler.getConnection(STORE_ROOT, "Todo_todos");
	console.log('CONNECTION', CONNECTION);
	ConnectionHandler.insertEdgeAfter(CONNECTION, NEW_NODE);
	// const NEW_EDGE = ConnectionHandler.createEdge(
	// 	proxyStore,
	// 	CONNECTION,
	// 	NEW_NODE,
	// 	'TodoEdge'
	// );
	// ConnectionHandler.insertEdgeAfter(CONNECTION,NEW_EDGE);
};


function commit(todo) {
	return commitMutation(
		RelayEnvironment,
		{
			mutation,
			variables: {
				input: {
					title: todo.title,
					done: todo.done
				}
			},
			
			// optimisticUpdater: (proxyStore) => {
			// 	const CLIENT_ID = 'client:local:' + tempID++;
			// 	const NEW_NODE = proxyStore.create(CLIENT_ID, 'Todo');
			// 	NEW_NODE.setValue(todo.title, 'title');
			// 	NEW_NODE.setValue(todo.done, 'done');
			// 	NEW_NODE.setValue(CLIENT_ID, 'id');
			// 	SharedUpdater(proxyStore, NEW_NODE);
			// },
			
			updater: (proxyStore) => {
				const ROOT_FIELD = proxyStore.getRootField('addTodo');
				const LINKED_RECORD = ROOT_FIELD.getLinkedRecord('todo');
				SharedUpdater(proxyStore, LINKED_RECORD);
			},
			
			onError: err => console.error(err),
			
		}
	);
}







export default {commit};