import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updatedHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updatedHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router