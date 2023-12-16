import mongoose from "mongoose"

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    roomNumbers: [{ number: Number, doluGunler: { type: [Date] } }],
}, { timestamps: true })
export default mongoose.model("Room", RoomSchema)
// mongodb de "Room" adında model oluşturur.