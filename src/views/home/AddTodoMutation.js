import {graphql, commitMutation} from 'react-relay';


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
      }
    }
  }
`;

function commit(environment, todo) {
	return commitMutation(
		environment,
		{
			mutation,
			variables: {
				input: {
					title: todo.title,
					done: todo.done
				}
			}
		}
	);
}







export default {commit};