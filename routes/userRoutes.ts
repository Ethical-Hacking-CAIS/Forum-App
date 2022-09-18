import express from "express";
const router = express.Router();
import {
  createUser,
  loginUser,
  logoutUser,
} from "../controllers/usersController";

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
