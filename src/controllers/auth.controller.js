import { conectar, sql, usersQuerys } from "../database";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const authLogin = async (req, res) => {
  const { data } = req.params;
  const dataN = data.split("-");
  const user = dataN[0];
  const pwd = dataN[1];
  if (!user || !pwd) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }
  const pool = await conectar();
  const foundUser = await pool
    .request()
    .input("user", sql.VarChar, user)
    .query(usersQuerys.authUsuario);

  if (foundUser.rowsAffected[0] ===  0 ) {
    return res.sendStatus(401);
  } else {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const buf = foundUser.recordset[0].password_U;
    const storedSalt = buf.slice(0, salt.length);
    const storedHash = buf.slice(salt.length);
    if (
      !bcrypt.compareSync(pwd, storedHash.toString(), storedSalt.toString())
    ) {
      return res.sendStatus(401);
    } else {
      const rol = foundUser.recordset[0].rol_U;
      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: user,
            rol: foundUser.recordset[0].rol_U,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30s" }
      );
      const refreshToken = jwt.sign(
        { username: user },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      await pool
        .request()
        .input("user", sql.VarChar, user)
        .input("refreshToken", sql.NVarChar, refreshToken)
        .query(usersQuerys.actualizarRefreshToken);

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken, pwd, rol, user });
    }
  }
};
