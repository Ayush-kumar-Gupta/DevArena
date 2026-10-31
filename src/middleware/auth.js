const UserAuth = (req, res, next) => {
    console.log("User auth is getting checked!");

    const token = "xyz";
    const isAuth = token === "ssxyz";

    if(!isAuth){
        res.status(401).send("Unauthorized");
    }
    else{
        next();
    }
};

module.exports = {
    UserAuth,
};