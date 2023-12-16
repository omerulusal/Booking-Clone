import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
// /login e gelen HTTP POST isteklerini login fonksiyonuna yönlendirir

export default router