import { conectar, sql, clientesQuerys } from "../database";
export const mostrarClientes = async (req, res) => {
  try {
    const pool = await conectar();
    const result = await pool.request().query(clientesQuerys.mostrarClientes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crearCliente = async (req, res) => {
  const {
    cod_clnt,
    nombre_clnt,
    direccion_clnt,
    telefono_clnt,
    mail_clnt,
    tipo_clnt,
    historicos_ventas_clnt,
    id_nit_clnt,
  } = req.body;
  if (
    cod_clnt == null ||
    nombre_clnt == null ||
    direccion_clnt == null ||
    telefono_clnt == null ||
    mail_clnt == null ||
    tipo_clnt == null ||
    historicos_ventas_clnt == null ||
    id_nit_clnt == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }
  try {
    const pool = await conectar();

    await pool
      .request()
      .input("cod_clnt", sql.Int, cod_clnt)
      .input("nombre_clnt", sql.VarChar, nombre_clnt)
      .input("direccion_clnt", sql.VarChar, direccion_clnt)
      .input("telefono_clnt", sql.VarChar, telefono_clnt)
      .input("mail_clnt", sql.VarChar, mail_clnt)
      .input("tipo_clnt", sql.VarChar, tipo_clnt)
      .input("historicos_ventas_clnt", sql.Int, historicos_ventas_clnt)
      .input("id_nit_clnt", sql.VarChar, id_nit_clnt)
      .query(clientesQuerys.crearCliente);

    res.json({
      cod_clnt,
      nombre_clnt,
      direccion_clnt,
      telefono_clnt,
      mail_clnt,
      tipo_clnt,
      historicos_ventas_clnt,
      id_nit_clnt,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const mostrarClienteId = async (req, res) => {
  const { cod_clnt } = req.params;

  const pool = await conectar();
  const result = await pool
    .request()
    .input("cod_clnt", cod_clnt)
    .query(clientesQuerys.mostrarClienteId);

  res.send(result.recordset[0]);
};

export const eliminarCliente = async (req, res) => {
  const { cod_clnt } = req.params;

  const pool = await conectar();
  const result = await pool
    .request()
    .input("cod_clnt", cod_clnt)
    .query(clientesQuerys.eliminarCliente);
  res.sendStatus(204);
};

export const actualizarCliente = async (req, res) => {
  const {
    nombre_clnt,
      direccion_clnt,
      telefono_clnt,
      mail_clnt,
      tipo_clnt,
      historicos_ventas_clnt,
      id_nit_clnt,
  } = req.body;
  const { cod_clnt } = req.params;

  if (
    nombre_clnt == null ||
    direccion_clnt == null ||
    telefono_clnt == null ||
    mail_clnt == null ||
    tipo_clnt == null ||
    historicos_ventas_clnt == null ||
    id_nit_clnt == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }

  const pool = await conectar();
  pool
    .request()
    .input("cod_clnt", sql.Int, cod_clnt)
      .input("nombre_clnt", sql.VarChar, nombre_clnt)
      .input("direccion_clnt", sql.VarChar, direccion_clnt)
      .input("telefono_clnt", sql.VarChar, telefono_clnt)
      .input("mail_clnt", sql.VarChar, mail_clnt)
      .input("tipo_clnt", sql.VarChar, tipo_clnt)
      .input("historicos_ventas_clnt", sql.Int, historicos_ventas_clnt)
      .input("id_nit_clnt", sql.VarChar, id_nit_clnt)
    .query(clientesQuerys.actualizarCliente);

  res.json({
    cod_clnt,
      nombre_clnt,
      direccion_clnt,
      telefono_clnt,
      mail_clnt,
      tipo_clnt,
      historicos_ventas_clnt,
      id_nit_clnt,
  });
};
