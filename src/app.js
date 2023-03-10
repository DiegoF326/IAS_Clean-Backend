import express from 'express'
import config from './config'
import productosRoutes from './routes/products.routes';
import clientesRoutes from './routes/clientes.routes';
import proveedoresRoutes from './routes/proveedores.routes';
import empresaRoutes from './routes/empresa.routes';
import matertiaPrimaRoutes from './routes/materiaPrima.routes';
import empleadosRoutes from './routes/empleados.routes';

const app = express()

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(productosRoutes);
app.use(clientesRoutes);
app.use(proveedoresRoutes);
app.use(empresaRoutes);
app.use(matertiaPrimaRoutes);
app.use(empleadosRoutes);

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
export default app;
