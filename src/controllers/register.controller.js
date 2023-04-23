import { conectar, sql, usersQuerys } from "../database";
const bcrypt = require("bcrypt");

export const crearUsuario = async (req, res) => {
  const { user, pwd, rol } = req.body;
  if (user == null || pwd == null || rol == null) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }
  /*  const pool1 = await conectar();
  const result = await pool1.request().input("user", sql.VarChar, user).query(usersQuerys.validarDuplicados);
  if (result != 0) res.sendStatus(409); //Conflict*
  */
  try {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(pwd, salt);

    const bufSize = Buffer.byteLength(hash) + salt.length;
    const buf = Buffer.alloc(bufSize);
    Buffer.from(salt).copy(buf, 0, 0, salt.length);
    Buffer.from(hash).copy(buf, salt.length, 0);

    //const pool = await conectar();
    const pool2 = await conectar();
    await pool2
      .request()
      .input("user", sql.VarChar, user)      
      .input("hashPw", sql.VarBinary, buf)
      .input("rol", sql.VarChar, rol)
      .query(usersQuerys.crearUsuario);

    res.json({ success: `User ${user} created!` });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
