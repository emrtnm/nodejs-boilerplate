const home = require("./app/routers/home")

function run(app)
{
    app.use('/', home)
}

module.exports = { run }
