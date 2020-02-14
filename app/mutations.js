const {GraphQLObjectType} = require('graphql');

//  CONTROLLER
const ArticleController = require('./controller/article.controller');

const Mutations = new GraphQLObjectType({
	name: "RootMutation",
	fields: () => ({
		addArticle: ArticleController.AddArticle
	})
});


module.exports = Mutations;