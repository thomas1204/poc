const COLLECTIONS = require('../model/collections');
const DB = require('../model/db');

const {
	GraphQLString,
	GraphQLBoolean,
} = require('graphql');

const {
	connectionArgs,
	connectionDefinitions,
	connectionFromPromisedArray,
	mutationWithClientMutationId,
	offsetToCursor
} = require('graphql-relay');

// Type
const {ArticleType} = require('../type/type');

// Input
const {
	AddArticleInput
} = require('../input/artcile.inputs');

// Helper
const {GenerateSlug} = require('../../helper/utils.helper');


const {
	connectionType: ArticleConnection,
	edgeType: ArticleEdge
} = connectionDefinitions({
	name: COLLECTIONS.ARTICLES,
	nodeType: ArticleType
});

/**
 * Fetches the list of articles
 * @argument searchByTitle - Get article by its title
 * @argument status - Get article by its status
 */
const ArticleList = {
	name: "articleList",
	description: "Fetches list of articles",
	type: ArticleConnection,
	args: {
		searchByTitle: {
			description: "Filter article by its title",
			type: GraphQLString
		},
		status: {
			description: "Filter article by its status",
			type: GraphQLBoolean
		},
		...connectionArgs
	},
	resolve: (_, args, req) => {
		return connectionFromPromisedArray(
			new Promise((resolve, reject) => {
				let cond = {};
				if (args.status !== undefined) cond['status'] = args.status;
				if (args.searchByTitle !== undefined) cond['title'] = {
					"$regex": `^${args.searchByTitle}`,
					$options: 'i'
				};
				DB.GET(COLLECTIONS.ARTICLES, cond, (err, docs) => {
					if (err) {
						reject(err)
					} else {
						resolve(docs)
					}
				});
			}),
			args
		)
	}
};


const AddArticle = mutationWithClientMutationId(
	{
		name: "AddArticle",
		description: "Upload a article",
		inputFields: AddArticleInput,
		outputFields: {
			article: {
				type: ArticleEdge,
				resolve: (payload) => {
					return new Promise((resolve, reject) => {
						DB.COUNT(COLLECTIONS.ARTICLES, {}, (err, count) => {
							if (err) {
								reject(err)
							} else {
								const article = HandlePayload(payload);
								resolve({
									cursor: offsetToCursor(count - 1),
									node: article
								});
							}
						});
					})
				}
			}
		},
		mutateAndGetPayload: (article) => {
			article['slug'] = GenerateSlug(article.title);
			return new Promise((resolve, reject) => {
				DB.INSERT(COLLECTIONS.ARTICLES, article, (err, doc) => {
					if (err) {
						reject(err)
					} else {
						resolve(doc.ops[0])
					}
				})
			})
		}
	}
);


// Payload object
function HandlePayload(payload) {
	return {
		_id: payload._id,
		title: payload.title,
		slug: payload.slug,
		tags: payload.tags,
		image: payload.image,
		banner: payload.banner,
		description: payload.description,
		content: payload.content,
		status: payload.status,
		deleted: payload.deleted
	}
}


module.exports = {
	ArticleList,
	AddArticle
};