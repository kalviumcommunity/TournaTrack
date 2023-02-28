const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.set("strictQuery", false);


mongoose.connect(DB

).then(() => {


    console.log("I am here");

})
    .catch((error) => {
        console.log(error);
        app.use(express.json())
    })