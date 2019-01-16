const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/blogPost');
mongoose.Promise = Promise;

module.exports.User     = require('user');
module.exports.blogPost = require('blogPost');