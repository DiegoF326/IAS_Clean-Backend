import { Router } from "express";

import { authLogin} from "../controllers/auth.controller";

const router = Router();


router.get("/auth/:data", authLogin);


export default router;
