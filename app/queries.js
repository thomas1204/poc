const {GraphQLObjectType} = require('graphql');

//  NODE FIELD
const {nodeField} = require('../app/type/type');

//  CONTROLLER
const ArticleController = require('./controller/article.controller');

const Queries = new GraphQLObjectType({
	name: "RootQuery",
	fields: () => ({
		articles: ArticleController.ArticleList,
		node: nodeField
	})
});


module.exports = Queries;
