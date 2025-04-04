
import dotenv from "dotenv"
import nodemailer from "nodemailer"
import express from "express"
import cors from "cors"

dotenv.config()

const app = express()
app.use(express.json())

const corsOptions = {
  origin: "http://localhost:5173", // Allow only frontend requests
  methods: "GET,POST",
  credentials: true, // Allow cookies or authentication headers
};

app.use(cors(corsOptions))

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
})

app.post("/send-email", async(req, res) => {
  const {em}
})