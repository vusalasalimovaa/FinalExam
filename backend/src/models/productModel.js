import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    trim:true
  },
  price:{
    type:Number,
    required:true,
    trim:true
  },
  image:{
    type:String,
    required:true,
    trim:true
  },

},
{collection:"Wines"}
)

const Wines = mongoose.model("Wines", productSchema)
export default Wines