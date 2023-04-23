import { conectar, sql, productsQuerys } from "../database";
export const mostrarProductos = async (req, res) => {
  try {
    const pool = await conectar();
    const result = await pool.request().query(productsQuerys.mostrarProductos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crearProducto = async (req, res) => {
  const {
    cod_prod,
    nombre_prod,
    tipo_prod,
    presentacion_prod,
    valor_prod,
    descripcion_prod,
    cantidad_prod,
  } = req.body;
  if (
    cod_prod == null ||
    nombre_prod == null ||
    tipo_prod == null ||
    presentacion_prod == null ||
    valor_prod == null ||
    descripcion_prod == null ||
    cantidad_prod == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }
  try {
    const pool = await conectar();
    const verifyProduct = await pool
      .request()
      .input("cod_prod", sql.Int, cod_prod)
      .query(productsQuerys.mostrarProductoId);
    if (verifyProduct.rowsAffected[0] === 0) {
      await pool
        .request()
        .input("cod_prod", sql.Int, cod_prod)
        .input("nombre_prod", sql.VarChar, nombre_prod)
        .input("tipo_prod", sql.VarChar, tipo_prod)
        .input("presentacion_prod", sql.VarChar, presentacion_prod)
        .input("valor_prod", sql.Float, valor_prod)
        .input("descripcion_prod", sql.VarChar, descripcion_prod)
        .input("cantidad_prod", sql.Float, cantidad_prod)
        .query(productsQuerys.crearProducto);

      res.json({
        cod_prod,
        nombre_prod,
        tipo_prod,
        presentacion_prod,
        valor_prod,
        descripcion_prod,
        cantidad_prod,
      });
    } else{
      return res.sendStatus(405)
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const mostrarProductoId = async (req, res) => {
  const { cod_prod } = req.params;

  const pool = await conectar();
  const result = await pool
    .request()
    .input("cod_prod", cod_prod)
    .query(productsQuerys.mostrarProductoId);

  res.send(result.recordset[0]);
};

export const eliminarProducto = async (req, res) => {
  const { cod_prod } = req.params;

  const pool = await conectar();
  const result = await pool
    .request()
    .input("cod_prod", cod_prod)
    .query(productsQuerys.eliminarProducto);
  res.sendStatus(204);
};

export const actualizarProducto = async (req, res) => {
  const {
    nombre_prod,
    tipo_prod,
    presentacion_prod,
    valor_prod,
    descripcion_prod,
    cantidad_prod,
  } = req.body;
  const { cod_prod } = req.params;

  if (
    nombre_prod == null ||
    tipo_prod == null ||
    presentacion_prod == null ||
    valor_prod == null ||
    descripcion_prod == null ||
    cantidad_prod == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }

  const pool = await conectar();
  pool
    .request()
    .input("cod_prod", sql.Int, cod_prod)
    .input("nombre_prod", sql.VarChar, nombre_prod)
    .input("tipo_prod", sql.VarChar, tipo_prod)
    .input("presentacion_prod", sql.VarChar, presentacion_prod)
    .input("valor_prod", sql.Float, valor_prod)
    .input("descripcion_prod", sql.VarChar, descripcion_prod)
    .input("cantidad_prod", sql.Float, cantidad_prod)
    .query(productsQuerys.actualizarProducto);

  res.json({
    cod_prod,
    nombre_prod,
    tipo_prod,
    presentacion_prod,
    valor_prod,
    descripcion_prod,
    cantidad_prod,
  });
};
