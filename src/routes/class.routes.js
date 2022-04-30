import { Router } from "express";
import * as classControllers from "../controllers/class.controller";
import { authJwt } from "../middlewares";
const router = Router();

router.get(
  "/:userId",
  [authJwt.verifyToken, authJwt.isProfesor],
  classControllers.getClass
);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  classControllers.createClass
);
router.get(
  "/ditails/:classid",
  [authJwt.verifyToken, authJwt.isProfesor],
  classControllers.getClassById
);

export default router;
