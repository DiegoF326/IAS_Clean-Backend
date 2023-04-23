import { Router } from "express";
import verifyRol from "../middleware/verifyRol";
import {
  mostrarEmpleados,
  crearEmpleado,
  eliminarEmpleado,
  actualizarEmpleado,
  mostrarEmpleadoId,
} from "../controllers/empleados.controller";

const router = Router();

router.get("/empleados",verifyRol("Administrador") , mostrarEmpleados);

router.post("/empleados",verifyRol("Administrador") , crearEmpleado);

router.get("/empleados/:cod_empl",verifyRol("Administrador") , mostrarEmpleadoId);

router.delete("/empleados/:cod_empl",verifyRol("Administrador") , eliminarEmpleado);

router.put("/empleados/:cod_empl",verifyRol("Administrador") , actualizarEmpleado);


export default router;
