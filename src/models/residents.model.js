const mongoose = require("mongoose");
const { stringify } = require("uuid");


const blockSchema = new mongoose.Schema(
  {
    block:{ type: String, required: true, unique: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const residentSchema = new mongoose.Schema(
    {
      name:{ type: String, required: true, unique: true },
      gender:{type:String,required:true},
      age:{type:Number,required:true}
    },
    {
      versionKey: false,
      timestamps: false,
    }
  );
  const flatSchema = new mongoose.Schema(
    {
        flat_no:{type:Number,required:true},
        resident_type:{type:String,required:true},
        resedent_id:[{ type: mongoose.Schema.Types.ObjectId, ref: "resident" }],
        block_id:{ type: mongoose.Schema.Types.ObjectId, ref: "block" }
    },
    {
      versionKey: false,
      timestamps: false,
    }
  );


const Block = mongoose.model("block", blockSchema);
const Resident = mongoose.model("resident", residentSchema);
const Flat = mongoose.model("flat", flatSchema);
 // user => users

module.exports = {Block,Resident,Flat};
