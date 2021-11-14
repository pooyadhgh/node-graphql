const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Post {
    userId: Int
    id: Int
    title: String
    body: String
}

type RootQuery {
    getPosts: [Post]
}

schema {
    query: RootQuery
}
`);
