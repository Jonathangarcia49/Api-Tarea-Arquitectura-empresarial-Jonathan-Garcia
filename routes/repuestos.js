const express=require("express");
const router=express.Router();
const ctrl=require("../controllers/repuestosController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Repuesto:
 *       type: object
 *       required: [nombre,marca,precio,stock,categoria]
 *       properties:
 *         nombre: { type: string }
 *         marca: { type: string }
 *         precio: { type: number }
 *         stock: { type: number }
 *         categoria: { type: string }
 */

/**
 * @swagger
 * /repuestos:
 *   get:
 *     summary: Listar repuestos
 */
router.get("/",ctrl.obtenerRepuestos);

/**
 * @swagger
 * /repuestos:
 *   post:
 *     summary: Crear repuesto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Repuesto'
 */
router.post("/",ctrl.crearRepuesto);

/**
 * @swagger
 * /repuestos/{id}:
 *   put:
 *     summary: Actualizar repuesto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 */
router.put("/:id",ctrl.actualizarRepuesto);

/**
 * @swagger
 * /repuestos/{id}:
 *   delete:
 *     summary: Eliminar repuesto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 */
router.delete("/:id",ctrl.eliminarRepuesto);

module.exports=router;
