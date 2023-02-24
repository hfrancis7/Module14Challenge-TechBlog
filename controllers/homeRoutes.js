const router = require('express').Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

/**
 * Route to display posts on homepage
 */
router.get("/", async (req, res) => {
    try{
        //get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        //serialize data so the template can read it
        const posts = postData.map((post) => post.get({plain: true}));

        //pass serialized data and session flag into template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    }catch(err){
        res.status(500).json(err);
    }
});

/**
 * Redirect to login from homepage
 */
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    //this shouldn't be an issue b/c the login button should disappear, keeping in just in case
    if (req.session.logged_in) {
      res.redirect('/profile'); //this would likely become dashboard? do I need a dashboard route? this challenge is kicking my ass
      return;
    }
  
    res.render('login');
  });

module.exports = router;

