import { Router } from "express";

import { handleRefreshToken} from '../controllers/refreshToken.controller';

const router = Router();


router.get("/refresh", handleRefreshToken);


export default router;
