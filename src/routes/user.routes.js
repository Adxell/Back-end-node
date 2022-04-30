import { Router } from "express";
const router = Router();
import {authJwt, verifysingup} from '../middlewares'
import * as userControllers from '../controllers/user.controller'

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  userControllers.getAllUser
);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  userControllers.createUser
);
router.put(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  userControllers.updateUserById
);
router.delete(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  userControllers.deleteUserById
);

export default router;
