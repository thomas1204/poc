const {GraphQLObjectType} = require('graphql');

//  CONTROLLER
const TodoController = require('./controller/todo.controller');

const Mutations = new GraphQLObjectType({
	name: "RootMutation",
	fields: () => ({
		addTodo: TodoController.AddTodo
	})
});


module.exports = Mutations;