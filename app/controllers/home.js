const mongoose = require("mongoose")

const home = (req, res) => {
    res.render('front/home', {title: 'home'})
}

module.exports = {
    home
}
