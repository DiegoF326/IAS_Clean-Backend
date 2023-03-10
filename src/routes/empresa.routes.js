import { Router } from "express";

import { actualizarEmpresa, mostrarEmpresa } from "../controllers/empresa.controller";

const router = Router();

router.get("/empresa", mostrarEmpresa);

router.put("/empresa/:cod_prod", actualizarEmpresa);


export default router;
