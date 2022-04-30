import { Router } from "express";
import { authJwt } from "../middlewares";
import * as reportDataControllers from "../controllers/reportData.controllers";
const router = Router();

router.delete(
  "/:reportid",
  [authJwt.verifyToken, authJwt.isProfesor],
  reportDataControllers.deleteReport
);

export default router;
