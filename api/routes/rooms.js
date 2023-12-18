import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updatedRoom, updatedRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verify.js";
const router = express.Router();


//CREATE
router.post("/:id", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updatedRoom);

router.post("availability/:id", updatedRoomAvailability);

// DELETE
router.delete("/:id", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getRooms);

export default router