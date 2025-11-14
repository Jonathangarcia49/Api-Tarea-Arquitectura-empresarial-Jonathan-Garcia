const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();

const {swaggerUi,swaggerSpec}=require("./swagger");
const repuestosRoutes=require("./routes/repuestos");
const cargarRepuestos=require("./seed/repuestosSeed");

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(async()=>{
 console.log("MongoDB conectado ✔");
 await cargarRepuestos();
})
.catch(err=>console.log(err));

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
app.use("/repuestos",repuestosRoutes);

app.listen(process.env.PORT,()=>console.log("API lista → http://localhost:"+process.env.PORT+"/api-docs"));
