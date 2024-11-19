// app/controllers/UserControllers.js
import UserModel from "../models/UserModel.js"; 
import ProfileModel from "../models/ProfileModel.js"
import { TokenEncode } from "../utility/tokenutility.js";
import { SendEmail } from "../utility/emailutility.js"


export const UserOtp = async (req, res) => {
    try{
          let email=req.params.email;
          //--- send otp to email
          let code=Math.floor(100000+Math.random()*900000);
          let EmailText= "Your code is "+code;
          let EmailSubject="Task Api verification code"
          await SendEmail(email,EmailText,EmailSubject)
          //---update or create otpcode in user
          await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})

          return res.json({ status: "success", message: "Email verification successful" });
    }
    catch(e){
      return res.json({ status: "fail", message: e.toString() });
    }
  };

  export const VerifyLogin = async (req, res) => {
    try {
        const email = req.params.email;
        const otp = req.params.otp;

        // Use countDocuments to count matching documents
        const total = await UserModel.countDocuments({ email: email, otp: otp });

        if (total === 1) {
            // Retrieve the user ID
            const user = await UserModel.findOne({ email: email, otp: otp }).select('_id');
            if (!user) {
                return res.json({ status: "fail", message: "User not found" });
            }

            // Create token
            const token = TokenEncode(email, user._id.toString());

            // Set OTP to '0'
            await UserModel.updateOne({ email: email }, { $set: { otp: '0' } });

            // Set cookie with token, expiring in 24 hours + 6060*1000 milliseconds
            const expirationTime = 24 * 60 * 60 * 1000 + 6060 * 1000; // 24 hours + 6060 seconds
            res.cookie('authToken', token, {
                maxAge: expirationTime, // Time in milliseconds
                httpOnly: false, // Prevent client-side JavaScript access
                secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
                sameSite: 'strict', // Prevent CSRF
            });

            return res.json({ status: "success", message: "Valid OTP", token: token });
        } else {
            return res.json({ status: "fail", message: "Invalid OTP" });
        }
    } catch (e) {
        return res.json({ status: "fail", message: e.toString() });
    }
};

export const Logout = (req, res) => {
    try {
        // Clear the cookie
        res.clearCookie('authToken', {
            httpOnly: false, // Ensure the cookie cannot be accessed via JavaScript
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'strict', // Prevent CSRF
        });

        return res.json({ status: "success", message: "Successfully logged out" });
    } catch (e) {
        return res.json({ status: "fail", message: e.toString() });
    }
};

export const CreateProfile = async (req, res) => {
    try {
        const user_id = req.headers.user_id;
        if (!user_id) {
            return res.status(401).json({ status: "fail", message: "Unauthorized: Missing user_id in headers" });
        }

        // Check if user exists
        const userExists = await UserModel.findById(user_id);
        if (!userExists) {
            return res.status(401).json({ status: "fail", message: "Unauthorized: User not found" });
        }

        let reqbody = req.body;
        reqbody.userID = user_id;

        await ProfileModel.updateOne({ userID: user_id }, { $set: reqbody }, { upsert: true });
        return res.json({ status: "success", message: "Profile saved" });
    } catch (e) {
        return res.json({ status: "fail", message: e.toString() });
    }
};

export const ReadProfile = async (req, res) => {
    try {
        const user_id = req.headers.user_id;
        let result = await ProfileModel.find({ userID: user_id });
        return res.json({ status: "success", data:result });
    } catch (e) {
        return res.json({ status: "fail", message: "something went wrong" });
    }
};
