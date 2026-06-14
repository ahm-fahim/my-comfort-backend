import userModel from "../models/userModel.js";
import validator from "validator";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";

//  Create Token 
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        
        if (!user) {
            return res.json({success: false, message: "User not found"});
        }

        const isMatch = await bycrpt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id);
            res.json({success: true, message:"Login successful", token})
        } else {
            res.json({success: false, message:"Invalid password"});
        }

    } catch (error) { 
        console.log(error);
        res.json({ success: false, message: "Error occurred while logging in user" });
    }

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

        const newUser = new userModel({
            name, email, password: hashedPassword
        });
        
        const  user  = await newUser.save();
        const token = createToken(user._id);
        
        res.json({ success: true, message: "User registered successfully", token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error occurred while registering user" });
    }
}

// Route for admin login
const adminLogin = async () => {

}
export { loginUser, registerUser, adminLogin }