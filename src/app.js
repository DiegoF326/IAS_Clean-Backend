import express from 'express'
import config from './config'
import productosRoutes from './routes/products.routes';
import clientesRoutes from './routes/clientes.routes';
import proveedoresRoutes from './routes/proveedores.routes';
import empresaRoutes from './routes/empresa.routes';
import matertiaPrimaRoutes from './routes/materiaPrima.routes';
import empleadosRoutes from './routes/empleados.routes';
import registerRoutes from './routes/register.routes';
import authRoutes from './routes/auth.routes';
import verifyJWT from "./middleware/verifyJWT";
import cookieParser from 'cookie-parser';
import refreshTokenRoutes from './routes/refresh.routes';
import logoutRoutes from './routes/logout.routes';
const credentials = require('./middleware/credentials');
const cors = require('cors');
const corsOptions = require('./config/corsOptions')
const app = express()

app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false}));

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    //mode: 'no-cors'
}));


app.set('port', config.port)


app.use(registerRoutes);
app.use(authRoutes);
app.use(refreshTokenRoutes);
app.use(logoutRoutes);


app.use(verifyJWT);
app.use(productosRoutes);
app.use(clientesRoutes);
app.use(proveedoresRoutes);
app.use(empresaRoutes);
app.use(matertiaPrimaRoutes);
app.use(empleadosRoutes);


export default app;
