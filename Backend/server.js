const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const itemController = require('./controllers/itemController');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Conexión a la base de datos establecida'))
.catch((error) => console.error('Error al conectar a la base de datos:', error));

// Definición de rutas CRUD
app.get('/api/items', itemController.getItems);
app.get('/api/items/:id', itemController.getItemById);
app.post('/api/items', itemController.createItem);
app.put('/api/items/:id', itemController.updateItem);
app.delete('/api/items/:id', itemController.deleteItem);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

// Manejo de errores general
app.use((err, req, res, next) => {
    console.error("Error en el servidor:", err.message);
    res.status(500).json({ message: "Ocurrió un error en el servidor" });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
