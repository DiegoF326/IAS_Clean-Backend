import { conectar, sql, usersQuerys } from "../database";

export const handleLogout = async (req, res) => {
  // On client, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const pool = await conectar();
  const foundUser = await pool
    .request()
    .input("refreshToken", sql.NVarChar, refreshToken)
    .query(usersQuerys.authRefreshToken);
  if (foundUser.recordset[0] === "") {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true});//
    return res.sendStatus(204);
  }

  // Delete refreshToken in db
  await pool
    .request()
    .input("refreshToken", sql.NVarChar, refreshToken)
    .query(usersQuerys.eliminarRefreshToken);

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true}); //secure: false
  res.sendStatus(204);
};

