import mongoose from "mongoose";

const DataSchema= new mongoose.Schema(
    {
        userID:{type: mongoose.Schema.Types.ObjectId,required:true},
        productID:{type: mongoose.Schema.Types.ObjectId,required:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const WishModel = mongoose.model('wishes',DataSchema)

export default WishModel;