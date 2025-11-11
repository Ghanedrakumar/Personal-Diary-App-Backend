import mongoose from "mongoose";
const BiometricSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
});
const Biometric = mongoose.model("Biometric", BiometricSchema);
export default Biometric;