const jwt = require("jsonwebtoken");

const auth = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.send("Authentication is invalid...");
    }
    console.log(authHeader);
    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.staff = { staffId: payload.id, staffUserName: payload.userName };

        next();
    } catch (error) {
        console.log(error);
        res.send("Invalid authentication...");
    }
};

module.exports = auth;