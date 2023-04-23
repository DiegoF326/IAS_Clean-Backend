import { Router } from "express";
import verifyRol from "../middleware/verifyRol"
import {
  mostrarProductos,
  crearProducto,
  eliminarProducto,
  actualizarProducto,
  mostrarProductoId,
} from "../controllers/products.controller";

const router = Router();

router.get("/productos",mostrarProductos);

router.post("/productos", crearProducto);

router.get("/productos/:cod_prod", mostrarProductoId);

router.delete("/productos/:cod_prod" ,verifyRol("Administrador") ,eliminarProducto);

router.put("/productos/:cod_prod" ,verifyRol("Administrador") ,actualizarProducto);


export default router;
