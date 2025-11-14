const swaggerJSDoc=require("swagger-jsdoc");
const swaggerUi=require("swagger-ui-express");
const path=require("path");

const options={
 definition:{
  openapi:"3.0.0",
  info:{title:"API Repuestos - Seed Automático",version:"1.0.0"}
 },
 apis:[path.join(__dirname,"/routes/*.js")]
};

module.exports={swaggerSpec:swaggerJSDoc(options),swaggerUi};
