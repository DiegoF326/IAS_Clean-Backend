export const productsQuerys = {
    mostrarProductos: 'SELECT * FROM productos_IAS',
    crearProducto: "INSERT INTO productos_IAS (cod_prod, nombre_prod, tipo_prod, presentacion_prod, valor_prod, descripcion_prod, cantidad_prod) VALUES (@cod_prod, @nombre_prod, @tipo_prod, @presentacion_prod, @valor_prod, @descripcion_prod, @cantidad_prod)",
    mostrarProductoId: 'SELECT * FROM productos_IAS WHERE cod_prod = @cod_prod',
    eliminarProducto: "DELETE FROM productos_IAS WHERE cod_prod = @cod_prod",
    actualizarProducto: 'UPDATE productos_IAS SET nombre_prod = @nombre_prod, tipo_prod = @tipo_prod, presentacion_prod = @presentacion_prod, valor_prod = @valor_prod, descripcion_prod = @descripcion_prod, cantidad_prod = @cantidad_prod WHERE cod_prod = @cod_prod'
};

export const clientesQuerys = {
    mostrarClientes: 'SELECT * FROM clientes_IAS',
    crearCliente: "INSERT INTO clientes_IAS (cod_clnt, nombre_clnt, direccion_clnt, telefono_clnt, mail_clnt, tipo_clnt, historicos_ventas_clnt, id_nit_clnt) VALUES (@cod_clnt, @nombre_clnt, @direccion_clnt, @telefono_clnt, @mail_clnt, @tipo_clnt, @historicos_ventas_clnt, @id_nit_clnt)",
    mostrarClienteId: 'SELECT * FROM clientes_IAS WHERE cod_clnt = @cod_clnt',
    eliminarCliente: "DELETE FROM clientes_IAS WHERE cod_clnt = @cod_clnt",
    actualizarCliente: 'UPDATE clientes_IAS SET nombre_clnt = @nombre_clnt, direccion_clnt = @direccion_clnt, telefono_clnt = @telefono_clnt, mail_clnt = @mail_clnt, tipo_clnt = @tipo_clnt, historicos_ventas_clnt = @historicos_ventas_clnt, id_nit_clnt = @id_nit_clnt WHERE cod_clnt = @cod_clnt'
};

export const proveedoresQuerys = {
    mostrarProveedores: 'SELECT * FROM proveedores_IAS',
    crearProveedor: "INSERT INTO proveedores_IAS (cod_prov, nombre_prov, nit_prov, direccion_prov, mail_prov, telefono_prov, historico_Compras_prov) VALUES (@cod_prov, @nombre_prov, @nit_prov, @direccion_prov, @mail_prov, @telefono_prov, @historico_Compras_prov)",
    mostrarProveedorId: 'SELECT * FROM proveedores_IAS WHERE cod_prov = @cod_prov',
    eliminarProveedor: "DELETE FROM proveedores_IAS WHERE cod_prov = @cod_prov",
    actualizarProveedor: 'UPDATE proveedores_IAS SET nombre_prov = @nombre_prov, nit_prov = @nit_prov, direccion_prov = @direccion_prov, mail_prov = @mail_prov, telefono_prov = @telefono_prov, historico_Compras_prov = @historico_Compras_prov WHERE cod_prov = @cod_prov'
};

export const empresaQuerys = {
    mostrarEmpresa: 'SELECT * FROM empresa_ias',
    actualizarEmpresa: 'UPDATE empresa_ias SET razon_social_empr = @razon_social_empr, actividad_economica_empr = @actividad_economica_empr, direccion_empr = @direccion_empr, telefono_empr = @telefono_empr, mail_empr = @mail_empr, numero_empl = @numero_empl, capital_empr = @capital_empr, activo_empr = @activo_empr, pasivo_empr = @pasivo_empr WHERE nit_empr = @nit_empr'
};

export const materiaPrimaQuerys = {
    mostrarMateriaPrima: 'SELECT * FROM materiaPrima_IAS',
    crearMateriaPrima: "INSERT INTO materiaPrima_IAS (cod_matPrima, empresa_ias_nit_empr, nombre_matPrima, descripcion_matPrima, tipo_matPrima, unidad_medida_matPrima, presentacion_matPrima, precio_uni_medida_matPrima, precio_presentacion_matPrima, cantidad_matPrima) VALUES (@cod_matPrima, @empresa_ias_nit_empr, @nombre_matPrima, @descripcion_matPrima, @tipo_matPrima, @unidad_medida_matPrima, @presentacion_matPrima, @precio_uni_medida_matPrima, @precio_presentacion_matPrima, @cantidad_matPrima)",
    mostrarMateriaPrimaId: 'SELECT * FROM materiaPrima_IAS WHERE cod_matPrima = @cod_matPrima',
    eliminarMateriaPrima: "DELETE FROM materiaPrima_IAS WHERE cod_matPrima = @cod_matPrima",
    actualizarMateriaPrima: 'UPDATE materiaPrima_IAS SET empresa_ias_nit_empr = @empresa_ias_nit_empr, nombre_matPrima = @nombre_matPrima, descripcion_matPrima = @descripcion_matPrima, tipo_matPrima = @tipo_matPrima, unidad_medida_matPrima = @unidad_medida_matPrima, presentacion_matPrima = @presentacion_matPrima, precio_uni_medida_matPrima = @precio_uni_medida_matPrima, precio_presentacion_matPrima = @precio_presentacion_matPrima, cantidad_matPrima = @cantidad_matPrima WHERE cod_matPrima = @cod_matPrima'
};

export const empleadosQuerys = {
    mostrarEmpleados: 'SELECT * FROM empleados_IAS',
    crearEmpleado: "INSERT INTO empleados_IAS (cod_empl, empresa_ias_nit_empr, nombre_empl, apellido_empl, area_empl, cargo_empl, salario_empl, telefono_empl, mail_empl, fecha_ini_empl, fecha_fin_empl, id_empl) VALUES (@cod_empl, @empresa_ias_nit_empr, @nombre_empl, @apellido_empl, @area_empl, @cargo_empl, @salario_empl, @telefono_empl, @mail_empl, @fecha_ini_empl, @fecha_fin_empl, @id_empl)",
    mostrarEmpleadoId: 'SELECT * FROM empleados_IAS WHERE cod_empl = @cod_empl',
    eliminarEmpleado: "DELETE FROM empleados_IAS WHERE cod_empl = @cod_empl",
    actualizarEmpleado: 'UPDATE empleados_IAS SET empresa_ias_nit_empr = @empresa_ias_nit_empr, nombre_empl = @nombre_empl, apellido_empl = @apellido_empl, area_empl = @area_empl, cargo_empl = @cargo_empl, salario_empl = @salario_empl, telefono_empl = @telefono_empl, mail_empl = @mail_empl, fecha_ini_empl = @fecha_ini_empl, fecha_fin_empl = @fecha_fin_empl, id_empl = @id_empl WHERE cod_empl = @cod_empl'
};