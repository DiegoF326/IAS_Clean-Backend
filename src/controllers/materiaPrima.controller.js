import { conectar, sql, materiaPrimaQuerys } from "../database";
export const mostrarMateriaPrima = async (req, res) => {
  try {
    const pool = await conectar();
    const result = await pool
      .request()
      .query(materiaPrimaQuerys.mostrarMateriaPrima);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crearMateriaPrima = async (req, res) => {
  const {
    cod_matPrima,
    empresa_ias_nit_empr,
    nombre_matPrima,
    descripcion_matPrima,
    tipo_matPrima,
    unidad_medida_matPrima,
    presentacion_matPrima,
    precio_uni_medida_matPrima,
    precio_presentacion_matPrima,
    cantidad_matPrima,
  } = req.body;
  if (
    cod_matPrima == null ||
    empresa_ias_nit_empr == null ||
    nombre_matPrima == null ||
    descripcion_matPrima == null ||
    tipo_matPrima == null ||
    unidad_medida_matPrima == null ||
    presentacion_matPrima == null ||
    precio_uni_medida_matPrima == null ||
    precio_presentacion_matPrima == null ||
    cantidad_matPrima == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }
  try {
    const pool = await conectar();

    await pool
      .request()
      .input("cod_matPrima", sql.Int, cod_matPrima)
      .input("empresa_ias_nit_empr", sql.Int, empresa_ias_nit_empr)
      .input("nombre_matPrima", sql.VarChar, nombre_matPrima)
      .input("descripcion_matPrima", sql.VarChar, descripcion_matPrima)
      .input("tipo_matPrima", sql.VarChar, tipo_matPrima)
      .input("unidad_medida_matPrima", sql.VarChar, unidad_medida_matPrima)
      .input("presentacion_matPrima", sql.VarChar, presentacion_matPrima)
      .input(
        "precio_uni_medida_matPrima",
        sql.Float,
        precio_uni_medida_matPrima
      )
      .input(
        "precio_presentacion_matPrima",
        sql.Float,
        precio_presentacion_matPrima
      )
      .input("cantidad_matPrima", sql.Float, cantidad_matPrima)
      .query(materiaPrimaQuerys.crearMateriaPrima);

    res.json({
      cod_matPrima,
      empresa_ias_nit_empr,
      nombre_matPrima,
      descripcion_matPrima,
      tipo_matPrima,
      unidad_medida_matPrima,
      presentacion_matPrima,
      precio_uni_medida_matPrima,
      precio_presentacion_matPrima,
      cantidad_matPrima,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const mostrarMateriaPrimaId = async (req, res) => {
  const { cod_matPrima } = req.params;

  const pool = await conectar();
  const result = await pool
    .request()
    .input("cod_matPrima", cod_matPrima)
    .query(materiaPrimaQuerys.mostrarMateriaPrimaId);

  res.send(result.recordset[0]);
};

export const eliminarMateriaPrima = async (req, res) => {
  const { cod_matPrima } = req.params;

  const pool = await conectar();
  const result = await pool
    .request()
    .input("cod_matPrima", cod_matPrima)
    .query(materiaPrimaQuerys.eliminarMateriaPrima);
  res.sendStatus(204);
};

export const actualizarMateriaPrima = async (req, res) => {
  const {
    empresa_ias_nit_empr,
    nombre_matPrima,
    descripcion_matPrima,
    tipo_matPrima,
    unidad_medida_matPrima,
    presentacion_matPrima,
    precio_uni_medida_matPrima,
    precio_presentacion_matPrima,
    cantidad_matPrima,
  } = req.body;
  const { cod_matPrima } = req.params;

  if (
    cod_matPrima == null ||
    empresa_ias_nit_empr == null ||
    nombre_matPrima == null ||
    descripcion_matPrima == null ||
    tipo_matPrima == null ||
    unidad_medida_matPrima == null ||
    presentacion_matPrima == null ||
    precio_uni_medida_matPrima == null ||
    precio_presentacion_matPrima == null ||
    cantidad_matPrima == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }

  const pool = await conectar();
  pool
    .request()
    .input("cod_matPrima", sql.Int, cod_matPrima)
    .input("empresa_ias_nit_empr", sql.Int, empresa_ias_nit_empr)
    .input("nombre_matPrima", sql.VarChar, nombre_matPrima)
    .input("descripcion_matPrima", sql.VarChar, descripcion_matPrima)
    .input("tipo_matPrima", sql.VarChar, tipo_matPrima)
    .input("unidad_medida_matPrima", sql.VarChar, unidad_medida_matPrima)
    .input("presentacion_matPrima", sql.VarChar, presentacion_matPrima)
    .input("precio_uni_medida_matPrima", sql.Float, precio_uni_medida_matPrima)
    .input(
      "precio_presentacion_matPrima",
      sql.Float,
      precio_presentacion_matPrima
    )
    .input("cantidad_matPrima", sql.Float, cantidad_matPrima)
    .query(materiaPrimaQuerys.actualizarMateriaPrima);

  res.json({
    cod_matPrima,
    empresa_ias_nit_empr,
    nombre_matPrima,
    descripcion_matPrima,
    tipo_matPrima,
    unidad_medida_matPrima,
    presentacion_matPrima,
    precio_uni_medida_matPrima,
    precio_presentacion_matPrima,
    cantidad_matPrima,
  });
};
