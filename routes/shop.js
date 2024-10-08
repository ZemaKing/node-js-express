const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
	// __dirname to file shop.js, then back, and into views
	// res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
	res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
