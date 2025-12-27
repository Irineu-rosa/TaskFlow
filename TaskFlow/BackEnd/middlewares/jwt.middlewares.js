import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function authToken(req, res, next){
    const authHeader = req.headers["authorization"];

    const token = authHeader?.split(' ')[1];

    if (!token) return res.sendStatus(401);

    JWT.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err){
            return res.sendStatus(401);
        }    
        req.user = user;
        next();
    });
}