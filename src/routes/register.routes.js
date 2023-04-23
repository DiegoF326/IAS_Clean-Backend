import { Router } from "express";

import { crearUsuario} from "../controllers/register.controller";

const router = Router();


router.post("/register", crearUsuario);


export default router;
