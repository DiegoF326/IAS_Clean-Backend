import { conectar, sql, empleadosQuerys } from "../database";
export const mostrarEmpleados = async (req, res) => {
  try {
    const pool = await conectar();
    const result = await pool.request().query(empleadosQuerys.mostrarEmpleados);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crearEmpleado = async (req, res) => {
  const {
    cod_empl,
    empresa_ias_nit_empr,
    nombre_empl,
    apellido_empl,
    area_empl,
    cargo_empl,
    salario_empl,
    telefono_empl,
    mail_empl,
    fecha_ini_empl,
    fecha_fin_empl,
    id_empl,
  } = req.body;
  if (
    cod_empl == null ||
    empresa_ias_nit_empr == null ||
    nombre_empl == null ||
    apellido_empl == null ||
    area_empl == null ||
    cargo_empl == null ||
    salario_empl == null ||
    telefono_empl == null ||
    mail_empl == null ||
    fecha_ini_empl == null ||
    fecha_fin_empl == null ||
    id_empl == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }
  try {
    const pool = await conectar();

    await pool
      .request()
      .input("cod_empl", sql.Int, cod_empl)
      .input("empresa_ias_nit_empr", sql.Int, empresa_ias_nit_empr)
      .input("nombre_empl", sql.VarChar, nombre_empl)
      .input("apellido_empl", sql.VarChar, apellido_empl)
      .input("area_empl", sql.VarChar, area_empl)
      .input("cargo_empl", sql.VarChar, cargo_empl)
      .input("salario_empl", sql.Float, salario_empl)
      .input("telefono_empl", sql.VarChar, telefono_empl)
      .input("mail_empl", sql.VarChar, mail_empl)
      .input("fecha_ini_empl", sql.Date, fecha_ini_empl)
      .input("fecha_fin_empl", sql.Date, fecha_fin_empl)
      .input("id_empl", sql.VarChar, id_empl)
      .query(empleadosQuerys.crearEmpleado);

    res.json({
      cod_empl,
      empresa_ias_nit_empr,
      nombre_empl,
      apellido_empl,
      area_empl,
      cargo_empl,
      salario_empl,
      telefono_empl,
      mail_empl,
      fecha_ini_empl,
      fecha_fin_empl,
      id_empl,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const mostrarEmpleadoId = async (req, res) => {
  const { cod_empl } = req.params;

  const pool = await conectar();
  const result = await pool
    .request()
    .input("cod_empl", cod_empl)
    .query(empleadosQuerys.mostrarEmpleadoId);

  res.send(result.recordset[0]);
};

export const eliminarEmpleado = async (req, res) => {
  const { cod_empl } = req.params;

  const pool = await conectar();
  const result = await pool
    .request()
    .input("cod_empl", cod_empl)
    .query(empleadosQuerys.eliminarEmpleado);
  res.sendStatus(204);
};

export const actualizarEmpleado = async (req, res) => {
  const {
    empresa_ias_nit_empr,
    nombre_empl,
    apellido_empl,
    area_empl,
    cargo_empl,
    salario_empl,
    telefono_empl,
    mail_empl,
    fecha_ini_empl,
    fecha_fin_empl,
    id_empl,
  } = req.body;
  const { cod_empl } = req.params;

  if (
    empresa_ias_nit_empr == null ||
    nombre_empl == null ||
    apellido_empl == null ||
    area_empl == null ||
    cargo_empl == null ||
    salario_empl == null ||
    telefono_empl == null ||
    mail_empl == null ||
    fecha_ini_empl == null ||
    fecha_fin_empl == null ||
    id_empl == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }

  const pool = await conectar();
  pool
    .request()
    .input("cod_empl", sql.Int, cod_empl)
    .input("empresa_ias_nit_empr", sql.Int, empresa_ias_nit_empr)
    .input("nombre_empl", sql.VarChar, nombre_empl)
    .input("apellido_empl", sql.VarChar, apellido_empl)
    .input("area_empl", sql.VarChar, area_empl)
    .input("cargo_empl", sql.VarChar, cargo_empl)
    .input("salario_empl", sql.Float, salario_empl)
    .input("telefono_empl", sql.VarChar, telefono_empl)
    .input("mail_empl", sql.VarChar, mail_empl)
    .input("fecha_ini_empl", sql.Date, fecha_ini_empl)
    .input("fecha_fin_empl", sql.Date, fecha_fin_empl)
    .input("id_empl", sql.VarChar, id_empl)
    .query(empleadosQuerys.actualizarEmpleado);

  res.json({
    cod_empl,
    empresa_ias_nit_empr,
    nombre_empl,
    apellido_empl,
    area_empl,
    cargo_empl,
    salario_empl,
    telefono_empl,
    mail_empl,
    fecha_ini_empl,
    fecha_fin_empl,
    id_empl,
  });
};
