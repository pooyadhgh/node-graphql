const express = require('express');
const router = express.Router();

const postControllers = require('../controllers/postsControllers');

router.get('/', postControllers.getPosts);

module.exports = router;
