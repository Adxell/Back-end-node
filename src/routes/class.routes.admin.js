import { Router } from "express";
import * as classControllersAdmin from "../controllers/class.controller.admin"
import { authJwt } from "../middlewares";
const router = Router();

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  classControllersAdmin.getClassAdmin
);

router.get(
  "/:classid",
  [authJwt.verifyToken, authJwt.isAdmin],
  classControllersAdmin.getClassByIdAdmin
);


router.put(
  "/:classid",
  [authJwt.verifyToken, authJwt.isAdmin],
  classControllersAdmin.updateClassByIdAdmin
);

router.delete(
  "/:classid",
  [authJwt.verifyToken, authJwt.isAdmin],
  classControllersAdmin.deleteClassByIdAdmin
);
export default router;
