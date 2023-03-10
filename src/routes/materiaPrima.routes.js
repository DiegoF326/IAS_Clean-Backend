import { Router } from "express";
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

router.delete("/materiaPrima/:cod_matPrima", eliminarMateriaPrima);

router.put("/materiaPrima/:cod_matPrima", actualizarMateriaPrima);

export default router;
