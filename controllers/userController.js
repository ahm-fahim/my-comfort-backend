import userModel from "../models/userModel.js";
import validator from "validator";
import bycrpt from "bcrypt";
// Route for user login
const loginUser = async (req, res) => {

}

// Route for user Register 
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // checking user already exist or not 
        const exists = await userModel.findOne({ email });

        if (exists) {
            return res.json({ success: false, message: "User already exist" });
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        // validating email format and strong password
        if (password.length < 8 ) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // hashing user password
        const salt = await bycrpt.genSalt(10);
        const hashedPassword = await bycrpt.hash(password, salt);
        


    } catch (error) {

    }
}

// Route for admin login
const adminLogin = async () => {

}
export { loginUser, registerUser, adminLogin }