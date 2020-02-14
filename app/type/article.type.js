const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt
} = require('graphql');

const {
	globalIdField
} = require('graphql-relay');

const COLLECTIONS = require('../model/collections');


module.exports = (nodeInterface) => {
	return new GraphQLObjectType({
		name: 'Article',
		description: "Details of a articles",
		fields: () => ({
			id: globalIdField(COLLECTIONS.ARTICLES, (obj) => obj._id),
			title: {
				type: GraphQLString,
				description: "Title of article",
				resolve: (obj) => obj.title
			},
			slug: {
				type: GraphQLString,
				resolve: (obj) => obj.slug
			},
			tags: {
				type: GraphQLString,
				resolve: (obj) => obj.tags
			},
			image: {
				type: GraphQLString,
				resolve: (obj) => obj.image
			},
			banner: {
				type: GraphQLString,
				resolve: (obj) => obj.banner
			},
			description: {
				type: GraphQLString,
				resolve: (obj) => obj.description
			},
			content: {
				type: GraphQLString,
				resolve: (obj) => obj.content
			},
			created_on: {
				type: GraphQLString,
				description: "Date created",
				resolve: (obj) => obj.created_on
			},
			status: {
				type: GraphQLBoolean,
				description: "Status of article",
				resolve: (obj) => obj.status
			}
		}),
		interfaces: [nodeInterface]
	});
};