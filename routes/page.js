const   express = require('express'),
        Router  = express.Router();

let blog = [
    {
        title: 'Whipped flavour skinny'
        ,img: 'https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        title: 'Caffeine dark blue'
        ,img: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        title: 'Mountain so variety'
        ,img: 'https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        title: 'Cinnamon skinny breve'
        ,img: 'https://images.pexels.com/photos/433184/pexels-photo-433184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        title: 'Milk carajillo turkish'
        ,img: 'https://images.pexels.com/photos/1477851/pexels-photo-1477851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        title: 'Milk carajillo turkish'
        ,img: 'https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        title: 'Milk carajillo turkish'
        ,img: 'https://images.pexels.com/photos/775878/pexels-photo-775878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        title: 'Milk carajillo turkish'
        ,img: 'https://images.pexels.com/photos/849645/pexels-photo-849645.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    }
]

Router.get('/', (req, res) => res.render('./index', {blog: blog}));


module.exports = Router;