const mongoose = require("mongoose");

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);


const connectdb = async () => {
    await mongoose.connect(
        "mongodb+srv://ayushkumargupta744_db_user:wfwKT4czsyy9qLDH@ayush.lagrd9f.mongodb.net/devArena"
    );
};


module.exports = connectdb;

