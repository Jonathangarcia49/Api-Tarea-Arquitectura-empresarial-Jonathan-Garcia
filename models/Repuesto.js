const mongoose=require("mongoose");

const RepuestoSchema=new mongoose.Schema({
 nombre:{type:String,required:true},
 marca:{type:String,required:true},
 precio:{type:Number,required:true},
 stock:{type:Number,required:true},
 categoria:{type:String,required:true},
 creado:{type:Date,default:Date.now}
});

module.exports=mongoose.model("Repuesto",RepuestoSchema);
