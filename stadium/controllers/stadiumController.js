const Stadium = require('../model/stadium');

// Créer un stade
exports.createStadium = async (req, res) => {
    try {
        const stadium = new Stadium(req.body);
        await stadium.save();
        res.status(201).json(stadium);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Lire tous les stades
exports.getAllStadiums = async (req, res) => {
    try {
        const stadiums = await Stadium.find();
        res.json(stadiums);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Lire un seul stade
exports.getStadiumById = async (req, res) => {
    try {
        const stadium = await Stadium.findById(req.params.id);
        if (!stadium) return res.status(404).json({ message: 'Stade non trouvé' });
        res.json(stadium);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour un stade
exports.updateStadium = async (req, res) => {
    try {
        const updated = await Stadium.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Stade non trouvé' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un stade avec notification
exports.deleteStadium = async (req, res) => {
    try {
        const deleted = await Stadium.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Stade non trouvé' });

        // 🔔 Notification de suppression
        console.log(`🔔 Stade "${deleted.name}" supprimé avec succès !`);

        res.json({ message: `Stade supprimé : ${deleted.name}` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
