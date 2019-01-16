const mongoose = require('mongoose'),
        bcrypt = require('bcryptjs');

let userSchema = new mongoose.Schema({
    firstName: {
        type:   String,
        required: true
    },
    lastName: {
        type:   String,
        required: true
    },
    email: {
        type:   String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type:   String,
        required: true
    }
});

userSchema.pre('save', function(next){
    let user = this;
    if(!user.isModified(password){return next()}

    bcrypt.hash(user.password, 10, (err, hash) =>{
        if(err){ console.log('Error in user.js' + err) }
        user.password = hash;
        next();
    });

userSchema.methods.comparePassword = function( candidatePassword ){
    return bcrypt.compare(candidatePassword, this.password)
    .then((matched) => matched )
}

let User = mongoose.model('User', userSchema);

module.exports = User;