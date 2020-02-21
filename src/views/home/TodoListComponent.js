// TodoList.js
import React, {Component} from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import RelayEnvironment from "../../relay.environment";
import TodoComponent from "./TodoComponent";
import AddTodoComponent from './AddTodoComponent';
import LoaderComponent from './LoaderComponent';

class TodoList extends Component {
	
	state = {
		searchText: ""
	};
	
	handleSearch = (e) => {
		this.setState({
			searchText: e.target.value
		})
	};
	
	render() {
		const {searchText} = this.state;
		return (
			<QueryRenderer
				environment={RelayEnvironment}
				query={graphql`
          query TodoListComponentQuery($searchText: String) {
            todos (first: 100, searchByTitle: $searchText) @connection(key: "Todo_todos", filters: []) {
					    edges{
					      node{
					        id
					        ...TodoComponent_todo
					      }
					    }
					  }
          }
        `}
				variables={{searchText}}
				render={({error, props}) => {
					console.log('props', props);
					if (error) {
						return <div>Error!</div>;
					}
					if (!props) {
						return <LoaderComponent/>;
					}
					return (
						<div className="todoListWrapper">
							<div className="row">
								
								<div className="col-8">
									<input
										type="hidden"
										className="form-control searchField"
										placeholder="Search"
										onChange={(e) => this.handleSearch(e)}
									/>
								</div>
								
								{/* Add todo component*/}
								<AddTodoComponent />
							
							</div>
							
							{/* Todo lists */}
							<div className="todoList">
								{
									props.todos.edges.map(edge => (
										<TodoComponent
											key={edge.node.id}
											todo={edge.node}
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
