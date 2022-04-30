import { Router } from "express";
import { authJwt } from "../middlewares";
import * as reportDataControllers from "../controllers/reportData.controllers"
const router = Router();

router.get(
  "/:reportid",
  [authJwt.verifyToken, authJwt.isProfesor],
  reportDataControllers.getReportById
);
router.put(
  "/:reportid",
  [authJwt.verifyToken, authJwt.isProfesor],
  reportDataControllers.updateById
);

export default router;
