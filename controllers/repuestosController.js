const Repuesto=require("../models/Repuesto");

exports.obtenerRepuestos=async(req,res)=>{
  const data=await Repuesto.find();
  res.json(data);
};

exports.crearRepuesto=async(req,res)=>{
  const nuevo=new Repuesto(req.body);
  await nuevo.save();
  res.json({mensaje:"Repuesto creado",data:nuevo});
};

exports.actualizarRepuesto=async(req,res)=>{
  const updated=await Repuesto.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.json({mensaje:"Repuesto actualizado",data:updated});
};

exports.eliminarRepuesto=async(req,res)=>{
  await Repuesto.findByIdAndDelete(req.params.id);
  res.json({mensaje:"Repuesto eliminado"});
};
