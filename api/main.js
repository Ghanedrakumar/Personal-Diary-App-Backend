import express, { Router } from 'express'
import mongoose from 'mongoose'
import signupRoutes from '../Routes/signup.js'
import loginRoutes from '../Routes/login.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from '../Routes/signup.js'
import ModalRoutes from '../Routes/Modal.js'
import cookieParser from 'cookie-parser'
import dotenv from "dotenv"
dotenv.config(); 
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
// router.use(cors())

const app = express()
const port = 3000
mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log('Connected to MongoDB')
}).catch(err => {
  console.error('Error connecting to MongoDB', err)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://personal-diary-app-frontend.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://personal-diary-app-frontend.vercel.app"
// ];

// app.use(
//   cors({
//     origin: allowedOrigins,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );


// app.use(cors({
//   origin: "http://localhost:5173", // or your frontend URL
//   credentials: true,
// }));

app.use(cookieParser())
app.use("/signup", signupRoutes)
app.use("/login", loginRoutes) 
app.use("/note", ModalRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Error handling
app.use((err,req,res,next)=>{
  const statusCode =err.statusCode || 500
  const message =err.message || "Internel Server Error"
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  })
  })