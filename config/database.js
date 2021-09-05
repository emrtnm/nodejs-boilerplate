const mongoose = require("mongoose")

const dbOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, dbOptions)
