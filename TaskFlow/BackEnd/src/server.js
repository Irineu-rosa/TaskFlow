import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT_API || 3001;

app.listen(PORT, () =>{
    console.log(`O servidor está rodando na porta: ${PORT}`);
})