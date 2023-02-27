const router = require('express').Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//create new post (in hindsight, calling it a post with POST routes can be confusing)
router.post('/', withAuth, async(req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            post_description: req.body.description,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

//delete a post
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if(!postData) {
            res.status(404).json({message: 'No post found with this id!'});
            return;
        }

        res.status(200).json(postData);
    } catch(err) {
        res.status(500).json(err);
    }
});

//edit a post
router.put("/:id", withAuth, async (req, res) => {
    try{
        const updatedPost = {title: req.body.newTitle, post_description: req.body.newDescription};
        const postData = await Post.update(updatedPost, {
            where: {
                id: req.params.id,
            }
        })
        console.log(postData);
        res.status(200).json(postData);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;