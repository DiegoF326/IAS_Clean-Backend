import { Router } from "express";
import verifyRol from "../middleware/verifyRol";
import {
  actualizarCliente,
  crearCliente,
  eliminarCliente,
  mostrarClienteId,
  mostrarClientes,
} from "../controllers/clientes.controller";

const router = Router();

router.get("/clientes", mostrarClientes);

router.post("/clientes", crearCliente);

router.get("/clientes/:cod_clnt", mostrarClienteId);

router.delete("/clientes/:cod_clnt",verifyRol("Administrador") , eliminarCliente);

router.put("/clientes/:cod_clnt",verifyRol("Administrador") , actualizarCliente);

export default router;
