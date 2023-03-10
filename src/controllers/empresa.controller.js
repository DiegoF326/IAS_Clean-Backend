import { conectar, sql, empresaQuerys } from "../database";
export const mostrarEmpresa = async (req, res) => {
  try {
    const pool = await conectar();
    const result = await pool.request().query(empresaQuerys.mostrarEmpresa);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const actualizarEmpresa = async (req, res) => {
  const {
    razon_social_empr,
    actividad_economica_empr,
    direccion_empr,
    telefono_empr,
    mail_empr,
    numero_empl,
    capital_empr,
    activo_empr,
    pasivo_empr,
  } = req.body;
  const { nit_empr } = req.params;

  if (
    razon_social_empr == null ||
    actividad_economica_empr == null ||
    direccion_empr == null ||
    telefono_empr == null ||
    mail_empr == null ||
    numero_empl == null ||
    capital_empr == null ||
    activo_empr == null ||
    pasivo_empr == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }

  const pool = await conectar();
  pool
    .request()
    .input("nit_empr", sql.Int, nit_empr)
    .input("razon_social_empr", sql.VarChar, razon_social_empr)
    .input("actividad_economica_empr", sql.VarChar, actividad_economica_empr)
    .input("direccion_empr", sql.VarChar, direccion_empr)
    .input("telefono_empr", sql.VarChar, telefono_empr)
    .input("mail_empr", sql.VarChar, mail_empr)
    .input("numero_empl", sql.Int, numero_empl)
    .input("capital_empr", sql.Float, capital_empr)
    .input("activo_empr", sql.Float, activo_empr)
    .input("pasivo_empr", sql.Float, pasivo_empr)
    .query(empresaQuerys.actualizarEmpresa);

  res.json({
    nit_empr,
    razon_social_empr,
    actividad_economica_empr,
    direccion_empr,
    telefono_empr,
    mail_empr,
    numero_empl,
    capital_empr,
    activo_empr,
    pasivo_empr,
  });
};
