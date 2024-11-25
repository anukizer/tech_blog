const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, attributes: ['username'] }],
    });
    const postsData = posts.map((post) => post.get({ plain: true }));
    res.render('home', { posts: postsData, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    const posts = userPosts.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
