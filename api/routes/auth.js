import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();
router.post("/register", register);// api/auth/register
router.post("/login", login);// api/auth/login
// /login e gelen HTTP POST isteklerini login fonksiyonuna yönlendirir

export default router