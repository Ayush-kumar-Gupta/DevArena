const express = require("express");
const connectdb = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());
app.post("/signup", async(req, res) =>{
    //Creatiing a new instance of the User model from the model folder
    console.log(req.body);
    const user = new User(req.body);
    try {
        await user.save();
        res.send("DATA send  sucessfully");
    }
    catch (err){
        res.status(400).send("Error saving the User" + err.message);
    }
});



connectdb()
.then(() =>{
    console.log("db connected");
    app.listen(3000,() => {
    console.log("Server Running on 3000 port ")
}); 
}).catch((err) => {
    console.error("DB not connected ")
});
