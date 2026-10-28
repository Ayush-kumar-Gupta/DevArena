const express = require("express");

const app = express();

//This will only handle GET call to /user 
app.get("/g",(req,res) =>{
    res.send({user: "Ayush", pass :"111"})
})


app.post("/user",(req, res)=> {
    res.send("Data sucessfull saved to the database! ")
})
//This will match all the HTTP method API calls to /test
app.use("/test",(req, res) => {
    res.send("Hello from server ")
});


app.delete("/user", (req, res) => {
    res.send("Deleted");
})



app.listen(3000,() => {
    console.log("Server Running on 3000 port ")
}); 