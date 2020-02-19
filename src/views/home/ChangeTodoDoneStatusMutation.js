import {
	graphql,
	commitMutation
} from 'react-relay';

const mutation = graphql`
  mutation ChangeTodoDoneStatusMutation($input: ChangeTodoDoneStatusInput!) {
    changeTodoDoneStatus(input: $input) {
      todo {
        id
        done
      }
    }
  }
`;


function getOptimisticResponse(id, done) {
	return {
		changeTodoDoneStatus: {
			todo: {
				id,
				done
			}
		}
	}
}

function commit(environment, id, done) {
	return commitMutation(
		environment,
		{
			mutation,
			variables: {
				input: {
					done,
					id
				}
			},
			optimisticResponse: getOptimisticResponse(id, done)
		}
	)
}

export default {commit}