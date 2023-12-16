import express from "express";
import { deleteUser, getUser, getUsers, updatedUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verify.js";

const router = express.Router();

router.get("/checkauth", verifyToken,(req,res,next)=>{
    res.send("You are authenticated")
})


router.get("/checkuser/:id", verifyToken,(req,res,next)=>{
    res.send("You are logged in and you can delete your account")
})


router.get("/checkadmin/:id", verifyToken,(req,res,next)=>{
    res.send("Admin you are logged in and you can delete all accounts")
})


// UPDATE
router.put("/:id",verifyUser, updatedUser)
// DELETE
router.delete("/:id",verifyUser, deleteUser)
// GET
router.get("/:id",verifyUser, getUser)
// GET ALL
router.get("/",verifyAdmin, getUsers)

export default router