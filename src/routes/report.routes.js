import { Router } from "express";
import { authJwt } from "../middlewares";
import * as reportControllers from "../controllers/report.controller";

const router = Router();

router.post(
  "/:classid",
  [authJwt.verifyToken, authJwt.isProfesor],
  reportControllers.createReport
);
router.get(
  "/:classid",
  [authJwt.verifyToken, authJwt.isProfesor],
  reportControllers.getReport
);

export default router;
