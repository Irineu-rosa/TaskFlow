import express from "express";
import cors from "cors";

import r_login from "../routes/r_login.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use(r_login);

export default app;