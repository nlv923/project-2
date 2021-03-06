const express = require('express');
const db = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils');
const router = express.Router();


/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res) => {

  const recentMovies = await db.Movie.findAll({ limit: 6, order: [['createdAt', 'DESC']] });
  const genres = await db.Genre.findAll()

  res.render('index', { title: 'MovieReview', recentMovies, genres, token: req.csrfToken() });
}));

module.exports = router;
