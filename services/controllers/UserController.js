// app/controllers/UserControllers.js
import UserModel from "../models/UserModel.js"; 
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