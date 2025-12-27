import { db } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

export async function getLogin(email, senha) {
  let connection;
  const SQL = `SELECT u.id, u.name, u.email, u.password FROM users u WHERE u.email = ?`;
  try {
    connection = await db.getConnection();
    const [rows] = await connection.execute(SQL, [email]);

    return rows.length > 0 ? rows[0] : null;

  } catch (error) {
    console.log("Erro ao buscar usuário:", error);
  } finally {
    if (connection) connection.release();
  }
}