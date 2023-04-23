import { Router } from "express";

import { handleLogout} from '../controllers/logout.controller';

const router = Router();


router.get("/logout", handleLogout);


export default router;
