// TodoList.js
import React, {Component} from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import RelayEnvironment from "../../relay.environment";
import TodoComponent from "./TodoComponent";

class TodoList extends Component {
	render() {
		return (
			<QueryRenderer
				environment={RelayEnvironment}
				query={graphql`
          query TodoListComponentQuery {
            todos{
					    edges{
					      node{
					        id
					        ...TodoComponent_todo
					      }
					    }
					  }
          }
        `}
				variables={{}}
				render={({error, props}) => {
					if (error) {
						return <div>Error!</div>;
					}
					if (!props) {
						return <div>Loading...</div>;
					}
					return (
						<div className="todoListWrapper">
							<div className="row">
								<div className="col-8">
									<input
										type="text"
										className="form-control searchField"
										placeholder="Search"
									/>
								</div>
								<div className="col-4">
									<button type="button" className="btn btn-dark btn-block">
										Add todo
									</button>
								</div>
							</div>
							
							<div className="todoList">
								{
									props.todos.edges.map(edge=>(
										<TodoComponent
											key = {edge.node.id}
											todo = {edge.node}
										/>
									))
								}
							</div>
						</div>
					);
				}}
			/>
		)
	}
}

export default TodoList;
