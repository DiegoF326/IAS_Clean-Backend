import { conectar, sql, proveedoresQuerys } from "../database";
export const mostrarProveedores = async (req, res) => {
  try {
    const pool = await conectar();
    const result = await pool.request().query(proveedoresQuerys.mostrarProveedores);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crearProveedor = async (req, res) => {
  const {
    cod_prov,
    nombre_prov,
    nit_prov,
    direccion_prov,
    mail_prov,
    telefono_prov,
    historico_Compras_prov,
  } = req.body;
  if (
    cod_prov == null ||
    nombre_prov == null ||
    nit_prov == null ||
    direccion_prov == null ||
    mail_prov == null ||
    telefono_prov == null ||
    historico_Compras_prov == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }
  try {
    const pool = await conectar();

    await pool
      .request()
      .input("cod_prov", sql.Int, cod_prov)
      .input("nombre_prov", sql.VarChar, nombre_prov)
      .input("nit_prov", sql.Int, nit_prov)
      .input("direccion_prov", sql.VarChar, direccion_prov)
      .input("mail_prov", sql.VarChar, mail_prov)
      .input("telefono_prov", sql.Float, telefono_prov)
      .input("historico_Compras_prov", sql.Float, historico_Compras_prov)
      .query(proveedoresQuerys.crearProveedor);

    res.json({
      cod_prov,
      nombre_prov,
      nit_prov,
      direccion_prov,
      mail_prov,
      telefono_prov,
      historico_Compras_prov,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const mostrarProveedorId = async (req, res) => {
  const { cod_prov } = req.params;

  const pool = await conectar();
  const result = await pool
    .request()
    .input("cod_prov", cod_prov)
    .query(proveedoresQuerys.mostrarProveedorId);

  res.send(result.recordset[0]);
};

export const eliminarProveedor = async (req, res) => {
  const { cod_prov } = req.params;

  const pool = await conectar();
  const result = await pool
    .request()
    .input("cod_prov", cod_prov)
    .query(proveedoresQuerys.eliminarProveedor);
  res.sendStatus(204);
};

export const actualizarProveedor = async (req, res) => {
  const {
    nombre_prov,
    nit_prov,
    direccion_prov,
    mail_prov,
    telefono_prov,
    historico_Compras_prov,
  } = req.body;
  const { cod_prov } = req.params;

  if (
    nombre_prov == null ||
    nit_prov == null ||
    direccion_prov == null ||
    mail_prov == null ||
    telefono_prov == null ||
    historico_Compras_prov == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }

  const pool = await conectar();
  pool
    .request()
    .input("cod_prov", sql.Int, cod_prov)
    .input("nombre_prov", sql.VarChar, nombre_prov)
    .input("nit_prov", sql.Int, nit_prov)
    .input("direccion_prov", sql.VarChar, direccion_prov)
    .input("mail_prov", sql.VarChar, mail_prov)
    .input("telefono_prov", sql.Float, telefono_prov)
    .input("historico_Compras_prov", sql.Float, historico_Compras_prov)
    .query(proveedoresQuerys.actualizarProveedor);

  res.json({
    cod_prov,
    nombre_prov,
    nit_prov,
    direccion_prov,
    mail_prov,
    telefono_prov,
    historico_Compras_prov,
  });
};
