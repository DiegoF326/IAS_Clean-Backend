import { Router } from "express";

import {
  actualizarProveedor,
  crearProveedor,
  eliminarProveedor,
  mostrarProveedores,
  mostrarProveedorId,
} from "../controllers/proveedores.controller";

const router = Router();

router.get("/proveedores", mostrarProveedores);

router.post("/proveedores", crearProveedor);

router.get("/proveedores/:cod_prov", mostrarProveedorId);

router.delete("/proveedores/:cod_prov", eliminarProveedor);

router.put("/proveedores/:cod_prov", actualizarProveedor);

export default router;
