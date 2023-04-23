import { Router } from "express";
import verifyRol from "../middleware/verifyRol";
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

router.delete("/proveedores/:cod_prov",verifyRol("Administrador") , eliminarProveedor);

router.put("/proveedores/:cod_prov",verifyRol("Administrador") , actualizarProveedor);

export default router;
