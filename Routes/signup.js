
import express ,{Router} from "express";
import Biometric from "../models/registration.js";
import bodyParser from "body-parser";
const router =Router()
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.post("/signup", async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    console.log(req.body);
 const biometric = new Biometric({
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    });
    try {
        const savedBiometric = await biometric.save();
        res.status(201).json(savedBiometric);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});
export default router;
