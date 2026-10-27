const express = require("express");

const app = express();

app.use("/test",(req, res) => {
    res.send("Hello from server ")
});


app.use((req, res) =>{
    res.send("Hello bhai ");
})

app.listen(3000,() => {
    console.log("Server Running on 3000 port ")
});