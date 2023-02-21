const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//User hasMany Post
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' //if User is deleted, post will be deleted as well (as opposed to saying "User No Longer Exists" or smth)
});

//Post belongsTo User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

//User hasMany Comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: '', //Probably Cascade?
}); 

//Comment belongsTo User
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

//Post hasMany Comment
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: '', //Probably Cascade?
})

//Comment belongsTo Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
})

module.exports = { User, Post, Comment}