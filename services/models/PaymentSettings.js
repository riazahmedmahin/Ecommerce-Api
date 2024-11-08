import mongoose from "mongoose";

const DataSchema= new mongoose.Schema(
    {
        store_id:{type: String,required: true},
        prstore_passwd:{type: String,required: true},
        currency:{type: String,required: true},
        success_url:{type: String,required: true},
        fail_url:{type: String,required: true},
        cancle_url:{type: String,required: true},
        init_url:{type: String,required: true},
        inp_url:{type: String,required: true}, 
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const PaymentSettingModel = mongoose.model('paymentsettings',DataSchema)

export default PaymentSettingModel;