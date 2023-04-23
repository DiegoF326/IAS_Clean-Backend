import { conectar, sql, usersQuerys } from "../database";
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const pool = await conectar();
  const foundUser = await pool
    .request()
    .input("refreshToken", sql.NVarChar, refreshToken)
    .query(usersQuerys.authRefreshToken);

  if (foundUser.recordset[0] === "") return res.sendStatus(403); //Forbidden
  // evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.recordset[0].username_U !== decoded.username)
      return res.sendStatus(403);
    const rol = foundUser.recordset[0].rol_U;
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: decoded.username,
          rol: rol,
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    res.json({ rol, accessToken });
  });
};
