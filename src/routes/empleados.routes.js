import { Router } from "express";

import {
  mostrarEmpleados,
  crearEmpleado,
  eliminarEmpleado,
  actualizarEmpleado,
  mostrarEmpleadoId,
} from "../controllers/empleados.controller";

const router = Router();

router.get("/empleados", mostrarEmpleados);

router.post("/empleados", crearEmpleado);

router.get("/empleados/:cod_empl", mostrarEmpleadoId);

router.delete("/empleados/:cod_empl", eliminarEmpleado);

router.put("/empleados/:cod_empl", actualizarEmpleado);


export default router;
