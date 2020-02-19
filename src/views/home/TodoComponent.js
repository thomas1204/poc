// Todo.js
import React, {Component} from 'react';
import {graphql, createFragmentContainer} from 'react-relay'
import TodoStatusChangeMutation from "./ChangeTodoDoneStatusMutation";

class Todo extends Component {
	
	changeTodoStatusDone = (id, done) => {
		TodoStatusChangeMutation.commit(
			this.props.relay.environment,
			id,
			!done
		);
	};
	
	render() {
		const {id, title, done} = this.props.todo;
		return (
			<div className="d-flex justify-content-between list">
				<div className="d-inline-flex label">{title}</div>
				<div className="d-inline-flex">
					<button className="checkboxButton" onClick={() => this.changeTodoStatusDone(id, done)}>
						{
							done ?
								<i className="fas fa-check-square" /> :
								<i className="far fa-square"/>
						}
					</button>
				</div>
			</div>
		);
	}
}

export default createFragmentContainer(
	Todo,
	{
		todo: graphql `
			fragment TodoComponent_todo on Todo {
				id
        title
        done
      }
		`
	}
)
