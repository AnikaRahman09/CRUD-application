const mongoose = require('mongoose');

const DB = "mongodb+srv://anika:anika@cluster0.6sk3mpl.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("connection start"))
.catch((error)=> console.log(error.message));