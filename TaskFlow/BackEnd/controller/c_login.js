import { getLogin } from "../models/m_login.js";
import JWT from "jsonwebtoken";

export async function loginUser(req, res){
    
    const email = req.body.email;
    const password = req.body.password;
    
    try {
        const user = await getLogin(email, password);

        if (!user){
            res.status(404).json({message: "Login Inválido!"});
        }

        const payload = {
            id: user.id
        }

        const Token = JWT.sign(
            payload,
            process.env.JWT_SECRET,            
            {expiresIn: "1h"}
        )

        return res.status(200).json({
            id: user.id,
            name: user.name,
            Token
        })
    } catch (error) {        
        res.status(500).json({ message: "Erro ao processar login!"});
    }
}