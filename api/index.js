import express from "express"
//package.jsonda  "type": "module" ekledim
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        // kendi mongodb'me baglandım
        console.log("conneted to mongoDB")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})
// egerki mongodb baglantisi yoksa ekranda yazar

// middleware
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
// urlde /api/rooms yazarsa roomsRoute e gider

app.get("/", (req, res) => {
    res.send("hello this is backend home page")
})

app.listen(8800, () => {
    connect()
    console.log("Conneted to backend")
})
