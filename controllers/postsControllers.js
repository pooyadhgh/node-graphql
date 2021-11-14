const posts = require('../data/posts.json');

const getPosts = (req, res, send) => {
  res.send(posts);
};

module.exports = { getPosts };
