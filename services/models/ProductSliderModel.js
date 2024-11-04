import mongoose from "mongoose";

const DataSchema= new mongoose.Schema(
    {
        title:{type: String,required: true}, 
        des:{type: String,required: true},  
        img:{type: Boolean,required: true},  
        price:{type: String,required: true},  
        productID:{type: mongoose.Schema.Types.ObjectId,required: true},  
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const ProducSliderModel = mongoose.model('productsliders',DataSchema)

export default ProducSliderModel;