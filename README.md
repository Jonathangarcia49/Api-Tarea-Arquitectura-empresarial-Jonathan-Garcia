# API de Repuestos - Documentación

## Descripción General

Esta API permite gestionar un inventario de repuestos automotrices. Incluye operaciones CRUD (crear, leer, actualizar, eliminar) sobre repuestos, documentación Swagger y carga automática de datos de ejemplo (seed) en MongoDB.

---

## Estructura del Proyecto

- **server.js**: Punto de entrada de la API. Configura Express, CORS, conexión a MongoDB, rutas y Swagger.
- **controllers/repuestosController.js**: Lógica de negocio para CRUD de repuestos.
- **models/Repuesto.js**: Esquema Mongoose para los repuestos.
- **routes/repuestos.js**: Define las rutas de la API y su documentación Swagger.
- **seed/repuestosSeed.js**: Carga datos de ejemplo si la colección está vacía.
- **swagger.js**: Configuración de Swagger para documentación interactiva.

---

## Endpoints Principales

### Listar repuestos
- **GET** `/repuestos`
- Devuelve todos los repuestos en la base de datos.

### Crear repuesto
- **POST** `/repuestos`
- Crea un nuevo repuesto. Requiere un JSON con los campos: `nombre`, `marca`, `precio`, `stock`, `categoria`.

### Actualizar repuesto
- **PUT** `/repuestos/{id}`
- Actualiza un repuesto existente por su ID.

### Eliminar repuesto
- **DELETE** `/repuestos/{id}`
- Elimina un repuesto por su ID.

---

## Modelo de Datos

El modelo `Repuesto` tiene los siguientes campos:
- `nombre` (String, requerido)
- `marca` (String, requerido)
- `precio` (Number, requerido)
- `stock` (Number, requerido)
- `categoria` (String, requerido)
- `creado` (Date, por defecto fecha de creación)

---

## Seed Automático

Al iniciar la API, si la colección de repuestos está vacía, se insertan automáticamente 10 repuestos de ejemplo.

---

## Documentación Swagger

Disponible en: `/api-docs`

Permite probar los endpoints y ver los esquemas de datos.

---

## Ejemplo de Uso

### Crear un repuesto (POST /repuestos)
```json
{
  "nombre": "Filtro de Aceite",
  "marca": "Toyota",
  "precio": 15,
  "stock": 20,
  "categoria": "Motor"
}
```

---

## Instalación y Ejecución

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Configurar variables de entorno en un archivo `.env`:
   ```env
   MONGO_URI=mongodb://localhost:27017/tu_basededatos
   PORT=3000
   ```
3. Iniciar la API:
   ```bash
   node server.js
   ```
4. Acceder a la documentación interactiva:
   - [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## Notas
- El seed solo se ejecuta si la colección está vacía.
- El modelo y las rutas están documentadas con Swagger para facilitar la integración.
- El proyecto usa buenas prácticas de modularización (MVC).

---

## Autor
Jonathan Joseph Garcia Garcia
