const Repuesto=require("../models/Repuesto");

async function cargarRepuestos(){
 const count=await Repuesto.countDocuments();
 if(count>0){
  console.log("✔ Repuestos ya existen, no se agrega seed");
  return;
 }

 await Repuesto.insertMany([
  {nombre:"Filtro de Aceite",marca:"Toyota",precio:15,stock:20,categoria:"Motor"},
  {nombre:"Batería 12V 60Ah",marca:"Moura",precio:85,stock:10,categoria:"Eléctrico"},
  {nombre:"Pastillas de Freno",marca:"Brembo",precio:45,stock:25,categoria:"Frenos"},
  {nombre:"Aceite 5W-30",marca:"Mobil 1",precio:32,stock:50,categoria:"Lubricantes"},
  {nombre:"Amortiguador Trasero",marca:"Monroe",precio:120,stock:12,categoria:"Suspensión"},
  {nombre:"Llanta Aro 16",marca:"Goodyear",precio:110,stock:15,categoria:"Ruedas"},
  {nombre:"Bujías Iridium",marca:"NGK",precio:55,stock:30,categoria:"Motor"},
  {nombre:"Alternador",marca:"Bosch",precio:180,stock:5,categoria:"Eléctrico"},
  {nombre:"Radiador",marca:"Denso",precio:200,stock:8,categoria:"Enfriamiento"},
  {nombre:"Bobina de Encendido",marca:"ACDelco",precio:75,stock:18,categoria:"Eléctrico"}
 ]);

 console.log("✔ SEED cargado con éxito");
}

module.exports=cargarRepuestos;
