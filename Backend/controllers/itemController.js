const Peliculas = require('../models/item');

exports.getItems = async (req, res) => {
    try {
        const items = await Peliculas.find();
        res.json(items);
    } catch (error) {
        console.error("Error al obtener elementos:", error.message);
        res.status(500).json({ message: "Error al obtener los elementos" });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Peliculas.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: "Elemento no encontrado" });
        }
        res.json(item);
    } catch (error) {
        console.error("Error al obtener el elemento:", error.message);
        res.status(500).json({ message: "Error al obtener el elemento" });
    }
};

exports.createItem = async (req, res) => {
    const { name, description, genre, releaseDate, rating, imageUrl } = req.body;

    if (!name || !description || !genre || !releaseDate) {
        return res.status(400).json({ message: "Todos los campos obligatorios deben ser completados" });
    }

    if (rating !== undefined && (rating < 0 || rating > 10)) {
        return res.status(400).json({ message: "El rating debe estar entre 0 y 10" });
    }

    try {
        const newItem = new Peliculas({
            name,
            description,
            genre,
            releaseDate,
            rating,
            imageUrl
        });

        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error("Error al crear el elemento:", error.message);
        res.status(500).json({ message: "Error al crear el elemento" });
    }
};

// Actualizar un elemento existente
exports.updateItem = async (req, res) => {
    const { name, description, genre, releaseDate, rating, imageUrl } = req.body;

    if (!name || !description || !genre || !releaseDate) {
        return res.status(400).json({ message: "Todos los campos obligatorios deben ser completados" });
    }

    if (rating !== undefined && (rating < 0 || rating > 10)) {
        return res.status(400).json({ message: "El rating debe estar entre 0 y 10" });
    }

    try {
        const updatedItem = await Peliculas.findByIdAndUpdate(req.params.id, {
            name,
            description,
            genre,
            releaseDate,
            rating,
            imageUrl
        }, { new: true });

        if (!updatedItem) {
            return res.status(404).json({ message: "Elemento no encontrado" });
        }
        res.json(updatedItem);
    } catch (error) {
        console.error("Error al actualizar el elemento:", error.message);
        res.status(500).json({ message: "Error al actualizar el elemento" });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await Peliculas.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: "Elemento no encontrado" });
        }
        res.json({ message: "Elemento eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar el elemento:", error.message);
        res.status(500).json({ message: "Error al eliminar el elemento" });
    }
};
