import { Router } from "express";
import verifyRol from "../middleware/verifyRol";
import {
  actualizarMateriaPrima,
  crearMateriaPrima,
  eliminarMateriaPrima,
  mostrarMateriaPrima,
  mostrarMateriaPrimaId,
} from "../controllers/materiaPrima.controller";

const router = Router();

router.get("/materiaPrima", mostrarMateriaPrima);

router.post("/materiaPrima", crearMateriaPrima);

router.get("/materiaPrima/:cod_matPrima", mostrarMateriaPrimaId);

router.delete("/materiaPrima/:cod_matPrima",verifyRol("Administrador") , eliminarMateriaPrima);

router.put("/materiaPrima/:cod_matPrima",verifyRol("Administrador") , actualizarMateriaPrima);

export default router;
