const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://chandu:chandu@cluster0.xsdtu.mongodb.net/APARTMENT?retryWrites=true&w=majority");
}
//mongodb+srv://chandu:chandu@cluster0.xsdtu.mongodb.net/APARTMENT?retryWrites=true&w=majority