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
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard'); 
        return;
      }
    
    res.render('signup');
});

//dashboard should get all of the post data based on the logged_in user id
router.get("/dashboard", withAuth, async (req, res) => {
    try{
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id, //I think this gets the user_id that's saved in the db?
            },
        });

        const posts = postData.map((post) => post.get({plain: true}));

        res.render("dashboard", {
            posts,
            logged_in: true
        });
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

//render a post
//TODO: re add withAuth after testing done
router.get('/post/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

