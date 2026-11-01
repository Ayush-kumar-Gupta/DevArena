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

//Get user by email
app.get("/user", async (req, res) =>{
    const userEmail = req.body.emailId;

    try{
        const users = await User.find({emailId: userEmail});
        if(users.length === 0){
            res.status(404).send("User not Found")
        }
        else{
            res.send(users)
        }
    }
    catch (err){
        res.status(400).send("Something went wrong");
    }
});

//Feed Api - Get /feed - get all the users from the database
app.get("/feed", async(req, res) => {
     try{
        const users = await User.find({});
        res.send(users);
     }
     catch(err){
        res.status(400).send("Something went wrong")

     }
});

// Delete a user from the database
app.delete("/user", async(req, res) => {
    const userId = req.body.userId

    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("deleyed succesfully")
 
    }
    catch(err){
        res.status(400).send("Somthing went wrong");
    }
})


//Update data of the user

app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;

    try {
        await User.findByIdAndUpdate(userId, data);
        res.send("User updated successfully");
    }
    catch (err) {
        res.status(400).send("Something went wrong");
    }
});


// Update data of the user
connectdb()
.then(() =>{
    console.log("db connected");
    app.listen(3000,() => {
    console.log("Server Running on 3000 port ")
}); 
}).catch((err) => {
    console.error("DB not connected ")
});
