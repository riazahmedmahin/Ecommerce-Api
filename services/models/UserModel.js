import mongoose from "mongoose";

const DataSchema= new mongoose.Schema(
    {
        email:{type: String,unique: true,lowercase:true,required:true},
        otp:{type: String,required: true},
        
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const UserModel = mongoose.model('users',DataSchema)

export default UserModel;