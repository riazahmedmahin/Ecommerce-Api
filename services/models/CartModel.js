import mongoose from "mongoose";

const DataSchema= new mongoose.Schema(
    {
        userID:{type: mongoose.Schema.Types.ObjectId,required:true},
        productID:{type: mongoose.Schema.Types.ObjectId,required:true},
        color:{type:String,require:true},
        price:{type:String,require:true},
        qty:{type:String,require:true},
        size:{type:String,require:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const CartModel = mongoose.model('carts',DataSchema)

export default CartModel;