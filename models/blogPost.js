const mongoose = require('mongoose');

let blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String
    },
    author: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    },
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        }
    }]
})

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;