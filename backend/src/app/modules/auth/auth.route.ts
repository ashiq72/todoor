
import { Router } from "express";
import { AuthController } from "./auth.controller";
import { verifyToken } from "./auth.middleware";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/me", verifyToken(), AuthController.me);
router.post("/logout", AuthController.logout);

const authRouter = router;
export default authRouter;
