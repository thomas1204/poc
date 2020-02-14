const {
	GraphQLString,
	GraphQLNonNull,
	GraphQLBoolean
} = require('graphql');


const AddArticleInput = {
	title: {type: new GraphQLNonNull(GraphQLString)},
	tags: {type: new GraphQLNonNull(GraphQLString)},
	image: {type: GraphQLString},
	banner: {type: GraphQLString},
	description: {type: new GraphQLNonNull(GraphQLString)},
	content: {type: new GraphQLNonNull(GraphQLString)},
	status: {type: GraphQLBoolean, defaultValue: true}
};

const ChangeArticleStatusInput = {
	id: {type: new GraphQLNonNull(GraphQLString)},
	status: {type: new GraphQLNonNull(GraphQLBoolean)},
};

const DeleteArticleInput = {
	id: {type: new GraphQLNonNull(GraphQLString)},
	deleted: {type: new GraphQLNonNull(GraphQLBoolean)},
};


module.exports = {
	AddArticleInput,
	ChangeArticleStatusInput,
	DeleteArticleInput
};